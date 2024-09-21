const validator = require('validator')

const ValidateParticipante = (req,res,next) => {
    console.log("Caiu no middleware")

    const {nome, email, evento_id} = req.body;

    if(!nome || !email || !evento_id) {
        return res.status(500).json({
            msg : "Valide seus dados"
        })
    }

    if(!validator.isEmail(email)){
        return res.status(400).json({
            msg : 'Envie um email correto'
        })
    }

    if(nome.trim().length < 3){
        return res.status(500).json({
           msg : "O nome tem que ter mais de 3 caracteres"
        })
    }

    if(isNaN(evento_id)){
        return res.status(400).json({
            msg : "O ID do evento e invalido"
        })
    }

    return next()
}


module.exports = ValidateParticipante; 