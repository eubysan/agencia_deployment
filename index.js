import express from 'express';
import router from './routes/index.js';
import db from './config/database.js';
import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

const app = express();

// conectar la base de datos
db.authenticate()
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.log(error));

// definir puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4001;

// habilitar pug
app.set('view engine', 'pug');

// obtener el año actual
app.use((req, res, next) => {
  const year = new Date();

  res.locals.currentYear = year.getFullYear();
  res.locals.nombreSitio = 'Agencia de Viajes';
  next();
});

// agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// definir la carpeta publica
app.use(express.static('public'));

// agregar routers
app.use('/', router);

app.listen(port, host, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
