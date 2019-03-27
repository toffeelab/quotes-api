import express from 'express';
const router = express.Router();

router.get('', (req, res, next) => {
  console.log('good');
  res.send('good');
});

export default router;