import express from 'express';

const router = express.Router();
const routes = ['quote'];

routes.forEach(route => {
  router.use(`/${route}`, require(`./${route}`).default);
});

export default router;