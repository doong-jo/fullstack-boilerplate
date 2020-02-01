import { validationResult } from 'express-validator';
import { NOT_FOUND, BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status';

export function badRequestHandler(req, res, next) {
  if (!validationResult(req).isEmpty())
    return res.status(BAD_REQUEST).json(validationResult(req));
  next();
}

export function notFoundHandler(req, res, next) {
  res.sendStatus(NOT_FOUND);
}

export function internelServerErrorHandler(error, req, res, next) {
  console.error(error.message);
  res.sendStatus(INTERNAL_SERVER_ERROR);
}
