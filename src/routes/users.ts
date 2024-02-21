import express from 'express';

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi user');
});

export default router;
