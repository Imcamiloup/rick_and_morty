const axios = require('axios');

exports.getCharById = (res, id) => {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
           const ch = response.data;
           return{
            id,
            name: ch.name,
            status: ch.status,
            species: ch.species,
            gender: ch.gender,
            image: ch.image,
            origin: ch.origin.name,
           };   
        })
        .then((response) => {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(response));
        })
        .catch((reason) => {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end(reason.message);
        })
       


};


