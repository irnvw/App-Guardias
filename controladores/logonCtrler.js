// controlador para login d usuario

var mongoose=require('mongoose');
var Usuario =require('../dataset/usuario');

module.exports.logon = function(req, res){
    var nom = req.body.nombre,
        pass = req.body.clave;
    console.log("logon");
    console.log("Nombre: " + nom + " Pass en campoTexto: " + pass);
    console.log("-------");
    
    Usuario.find({"nombre": req.body.nombre} , function(err, resultado){
      console.log(req.body)  ;
      
      if (resultado && resultado.length === 1){
        
      var result = resultado[0],
          pass = result.clave; 
      if (pass === req.body.clave){
        console.log('LA clave es correcta');
        res.json("Logged");
        
      } else {
        console.log('La clave ' + req.body.clave + " No es igual a  " + pass );
        res.json("NoLogged")
      }
      } else {
        
        res.json("NoLogged");
      }
      
      
     
       
        
    });
    
    
}