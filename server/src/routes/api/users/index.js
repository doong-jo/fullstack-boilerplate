import * as express from 'express';
import * as controllers from './controllers';
import { badRequestHandler } from '../../../utils/errorHandlers';

const router = express.Router();

router.get('/:userId', controllers.getUser, badRequestHandler);

export default router;
