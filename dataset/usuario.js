var mongoose=require('mongoose');

module.exports = mongoose.model('Usuario', {
    
    nombre: String,
    clave: String,
    tipo: String
    
});

