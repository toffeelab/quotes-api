import express from 'express';

const router = express.Router();
const routes = ['quote'];

routes.forEach(route => {
  router.use(`/${route}`, import(`@/${route}`).default);
});

export default router;