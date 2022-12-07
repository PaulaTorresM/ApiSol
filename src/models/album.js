const {Schema,model}=require("mongoose");


const albumSchema = new Schema({
    _id:Number,
    nombreAlbum: String,
    anioPublicacion: String,
    estadoAlbum: String,

    genero:[{
      type:Schema.Types.ObjectId,
      ref:'Genero'
    }]
    
  });
 
  module.exports=model("Album",albumSchema);