const Cancion = require("../models/cancion");
const Album = require("../models/album");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const cancion = await Cancion.find().populate('album',{

      "_id":1,
      "nombreAlbum": 1,
      "anioPublicacion": 1,
      "estadoAlbum": 1
    });;
    res.status(200).json(cancion);
  } catch (error) {
    res.status(500).json(error)
  }

}

exports.obtenerid = async (req, res) => {
    try {
      const id = req.params.id;
      const cancion = await Cancion.findById(id).populate('album',{

        "_id":1,
        "nombreAlbum": 1,
        "anioPublicacion": 1,
        "estadoAlbum": 1

      });;
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //registrar
  exports.add = async (req, res) => {
    try {
     
      const nCancion = new Cancion(req.body,req.file)
      console.log(req.file);
      await nCancion.save();
      console.log(nCancion);
      res.json({ msj: "la cancion se registro exitosamente ", id: nCancion._id })
    } catch (error) {
      res.status(500).json({msj:"Error al registrar "+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const id = req.params.id;
      const nCancion = new Cancion(req.body,req.file)
      console.log(req.file);

      
      const cambioCancion = await cancion.findByIdAndUpdate(id, nCancion);
      res.json({ msj: "la cancion fue actualizada exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }