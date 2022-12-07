
const {Router}=require("express");

//rutas cancion
const rutasCancion=Router();
const ctrCan=require("../controllers/cancionC")



//cancion
rutasCancion.get('/', ctrCan.obtener);

rutasCancion.get('/:id', ctrCan.obtenerid);

rutasCancion.post('/', ctrCan.add);
  
rutasCancion.put('/:id',ctrCan.edit);

module.exports=rutasCancion;
