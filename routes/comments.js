//Importaciones
const { Router } = require('express');
const { check } = require('express-validator');
const { postComentario, getComentario } = require('../controllers/comments');

const router = Router();

router.get('/mostrar', getComentario);

router.post('/agregar', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('comentario', 'El comentario es obligatorio').not().isEmpty(),
] ,postComentario);

module.exports = router;