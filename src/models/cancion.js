const {Schema,model}=require("mongoose");

const cancionSchema = new Schema({
    _id:Number,
    nombreCancion: String,
    fechaGrabacion: Date,
    duracionCancion: String,
    estadoCancion: String,

    album:[{ 
      type:Schema.Types.ObjectId,
      ref:'Album'
    }]
   
    
  });
 
  module.exports=model("Cancion",cancionSchema);