

const {Router}=require("express");



//rutas genero
const rutasGenero=Router();
const ctrGen=require("../controllers/generoC")




//genero

rutasGenero.get('/', ctrGen.obtener);

rutasGenero.get('/:id', ctrGen.obtenerid);

rutasGenero.post('/', ctrGen.add);
  
rutasGenero.put('/:id', ctrGen.edit);




module.exports=rutasGenero;
