import express from 'express';
const router = express.Router();

router.get('/test', (req, res, next) => {
  console.log('good');
  res.send('good');
});

export default router;