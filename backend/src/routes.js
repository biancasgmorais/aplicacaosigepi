import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import ProviderController from './app/controllers/ProviderController';
import EpisController from './app/controllers/EpisController';
import DeliveryController from './app/controllers/DeliveryController';

const routes = new Router();

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/epis', EpisController.store);
routes.put('/epis', EpisController.update);
routes.get('/epis', EpisController.index);
routes.delete('/epis/:epiId', EpisController.delete);

routes.post('/delivers', DeliveryController.store);
routes.put('/delivers', DeliveryController.update);
routes.get('/delivers', DeliveryController.index);
routes.delete('/delivers/:deliverId', DeliveryController.delete);

export default routes;
