const { response, request } = require("express");
const Comentario = require("../models/comments")

const getComentario = async (req = request, res = response) => {
    const comentario = await Comentario.find()
    res.status(201).json({
        comentario
    });
};
  
const postComentario = async (req = request, res = response)=>{
    const {nombre, comentario} = req.body;
    const comentarioDB = new Comentario({
        nombre: nombre,
        comentario: comentario
      });
      await comentarioDB.save();

    res.status(200).json({
        comentarioDB
    })
}


module.exports = {
    getComentario,
    postComentario
}