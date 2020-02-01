import './env.js';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import indexRouter from './routes/api';
import { OK } from 'http-status';
import {
  notFoundHandler,
  internelServerErrorHandler,
} from './utils/errorHandlers';

const { CLIENT_URL } = process.env;

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    exposedHeaders: ['Uid', 'Access-Token'],
  }),
);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', indexRouter);

app.head('/', (req, res) => res.sendStatus(OK));

app.use(notFoundHandler);
app.use(internelServerErrorHandler);

export default app;
