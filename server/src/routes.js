import { Router } from 'express';
import ChatController from './app/controllers/ChatController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello world' }));
routes.post('/chat', ChatController.send);

export default routes;
