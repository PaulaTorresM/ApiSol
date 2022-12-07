const Album = require("../models/album");
const Genero = require("../models/genero");


//
exports.obtener = async (req, res) => {
  try {
    const album = await Album.find().populate('genero',{

    "_id":1,
    "nombreGenero": 1,
    "estadoGenero": 1

    });
    res.status(200).json(album);
  } catch (error) {
    res.status(500).json(error)
  }

}
  //get id
exports.obtenerid = async (req, res) => {
    try {
      const _id = req.params._id;
      const album = await Album.findById(_id).populate('genero',{

      "_id":1,
      "nombreGenero": 1,
      "estadoGenero": 1
  
      });
      res.status(200).json(album);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //registrar
  exports.add = async (req, res) => {
    try {
      const nAlbum = new Album(req.body,req.file)
      console.log(req.file);
  
      await nAlbum.save();
      
      console.log(nAlbum);
      
      res.json({ msj: "el album se registro exitosamente", id: nAlbum._id })
    } 
    catch (error) {
      res.status(500).json({msj:"Error al registrar "+error})
    }
  
  }


  //editar
exports.edit = async(req, res) => {
    try {
      const _id = req.params._id;
      const nAlbum = new Album(req.body,req.file)
      console.log(req.file);

      
      const cambioAlbum = await album.findByIdAndUpdate(_id, nAlbum);
      res.json({ msj: "el album fue actualizado exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
}