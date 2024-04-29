const { Schema, model } = require('mongoose');

const ComentarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    comentario: {
        type: String,
        required: [true, 'El comentario es obligatorio' ],
    }
});


module.exports = model('Comentario', ComentarioSchema);