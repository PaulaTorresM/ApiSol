const Cancion = require("../models/cancion");
const Album = require("../models/album");
const jwt=require("jsonwebtoken");

exports.obtener = async (req, res) => {
  try {
    const cancion = await Cancion.find().populate('album',{

      "_id":1,
      "nombreCancion": 1,
      "fechaGrabacion": 1,
      "duracionCancion": 1,
      "estadoCancion": 1
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
      "nombreCancion": 1,
      "fechaGrabacion": 1,
      "duracionCancion": 1,
      "estadoCancion": 1

      });;
      res.status(200).json(cancion);
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  //registrar
  exports.add = async (req, res) => {
    try {
  //crea constantes que suspongo que son para utilizarlas y mostralas en la vista
      const {
        _id,
        nombreCancion,
        fechaGrabacion,
        duracionCancion,
        estadoCancion,
        albumId

     } = new req.body;
     //console.log(req.file);


     //tae desde el modelo los id y hace una consulta por id
     const album=await Album.findById(albumId);
     console.log(album._id);


     const nCancion = new Cancion({
      _id,
      nombreCancion,
      fechaGrabacion,
      duracionCancion,
      estadoCancion,
      albumId: album._id    
       
     })
     
     try{
       const saveCancion=await nCancion.save();
       album.cancion=album.cancion.concat(saveCancion._id);
       await album.save();

       console.log(saveCancion)
       res.status(200).json(saveCancion);
       //segundo try
     }catch (error) {
       res.status(500).json({msj:"Error al registrar"+error})
     }
//catch del primer try
   } catch (error) {
      res.status(500).json({msj:"Error al registrar"+error})
    }
  
  }

exports.edit = async(req, res) => {
    try {
      const _id = req.params._id;
      const nCancion = new Cancion(req.body,req.file)
      console.log(req.file);

      
      const cambioCancion = await cancion.findByIdAndUpdate(_id, nCancion);
      res.json({ msj: "la cancion fue actualizada exitosamente"})
    } catch(error) {
      res.status(500).json(error);
    }
  }