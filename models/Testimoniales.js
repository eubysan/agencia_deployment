import { Sequelize } from 'sequelize';
import db from '../config/index.js';

export const Testimonial = db.define('testimoniales', {
  nombre: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  mensaje: {
    type: Sequelize.STRING,
  },
});
