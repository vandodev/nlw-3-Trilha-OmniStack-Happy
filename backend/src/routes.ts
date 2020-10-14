import {Router} from 'express';
import OrphanagesController from './controllers/orphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);

export default routes;