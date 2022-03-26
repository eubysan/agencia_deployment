import express from 'express';
import { guardarTestimonial } from '../controllers/testimonialControllers.js';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje,
} from '../controllers/paginasControllers.js';

const routes = express.Router();

// req - lo que enviamos : res - lo que express nos responde
routes.get('/', paginaInicio);

routes.get('/nosotros', paginaNosotros);

routes.get('/viajes', paginaViajes);
routes.get('/viajes/:slug', paginaDetalleViaje);

routes.get('/testimoniales', paginaTestimoniales);
routes.post('/testimoniales', guardarTestimonial);

export default routes;
