const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharById = async (req, res) => {
    try {
        const id = req.params.id; // Obtener el ID de los parámetros de la URL

        const response = await axios.get(`${URL}${id}`);
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
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getCharById };


