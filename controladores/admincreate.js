var guardias = require('../dataset/usuario');
var m = require('mongoose');

m.connect('mongodb://localhost/Guardias');

var u = new guardias({
    
    nombre:"algo",
    clave: "algo",
    tipo: "operador"
});

u.save(function(err, doc){
       
       console.log(err,doc);
       process.exit();
       });
