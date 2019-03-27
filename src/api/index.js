import awsServerlessExpress from 'aws-serverless-express';
import express from 'express';
import v1 from './v1';

const app = express();
app.use(express.json());
app.use('/api/v1', v1);

app.get('/api/ping', (req, res) => res.json({ ping: 'pong' }));
app.get('/api/ping2', (req, res) => res.json({ ping: 'pong' }));

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);