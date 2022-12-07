
const {Schema,model}=require("mongoose");

const generoSchema = new Schema({
    _id: Number,
    nombreGenero: String,
    estadoGenero: String,
  

  });

 
  //ese "" es el que se llama en los controladores 
  module.exports=model("Genero", generoSchema);