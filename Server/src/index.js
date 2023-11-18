const express = require('express');
const { conn } = require('./DB_connection');
const server = express();
const PORT =3001
const routes = require('./routes/index');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json());
server.use("/rickandmorty", routes);

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

conn.sync()
  .then(() => {
    console.log('Sequelize sincronizado con la base de datos.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar Sequelize con la base de datos:', error);
  });