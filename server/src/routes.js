import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));
routes.get('/chat', ChatController.list);

export default routes;
