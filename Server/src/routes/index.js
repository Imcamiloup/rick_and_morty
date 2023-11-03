const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');
const { postFav , deleteFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const router = Router();    


router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/favorite/:id', postFav);
router.delete('/favorite/:id', deleteFav);

module.exports = router;

