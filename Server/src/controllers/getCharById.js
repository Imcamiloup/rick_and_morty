const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = (req, res) => {
    const id = req.params.id; // Obtener el ID de los parámetros de la URL

    axios.get(`${URL}${id}`)
        .then(response => {
            const ch = response.data;

            if (ch) {
                const char = {
                    id,
                    name: ch.name,
                    status: ch.status,
                    gender: ch.gender,
                    species: ch.species,
                    image: ch.image,
                    origin: ch.origin.name,
                };
                res.status(200).json(char);
            } else {
                res.status(404).json({ message: 'Character not found' });
            }
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
};

module.exports = { getCharById };














// const axios = require('axios');

// exports.getCharById = (res, id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then((response) => {
//            const ch = response.data;
//            return{
//             id,
//             name: ch.name,
//             status: ch.status,
//             species: ch.species,
//             gender: ch.gender,
//             image: ch.image,
//             origin: ch.origin.name,
//            };   
//         })
//         .then((response) => {
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(response));
//         })
//         .catch((reason) => {
//             res.writeHead(500, { "Content-Type": "text/plain" });
//             res.end(reason.message);
//         })
       


// };


