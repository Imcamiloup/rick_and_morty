require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;


// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.


// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
const { defineModels } = require('./models');
const { User, Favorite } = defineModels(sequelize); 


//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });


// Resto del código...

sequelize.sync()
  .then(() => {
    console.log('Tablas creadas (o ya existen) en la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos con la base de datos:', error);
  })
  .finally(() => {
    // Cierra la conexión a la base de datos al finalizar
    sequelize.close();
  });

module.exports = {
    User,
    Favorite,
   conn: sequelize,
};
