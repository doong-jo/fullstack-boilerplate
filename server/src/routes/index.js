import express from 'express';
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendStatus(200);
});

export default router;
