const validator = require('validator');
const date_fns = require('date-fns')

const ValidateEvento = (req,res,next) => {
    console.log("Caiu no middleware")

    const {nome, data, localizacao} = req.body;

    if(!nome || !data || !localizacao) {
        return res.status(500).json({
            msg : "Valide seus dados"
        })
    }

    const validateData = new Date(data)

    if(!validator.isDate(validateData)){
        return res.status(400).json({
            msg : 'A data e invalida, envie no formato yyyy-mm-dd '
        })
    };

    if(!date_fns.isFuture(validateData)){
        return res.status(400).json({
            msg : 'A data do evento tem que ser futura'
        })
    }
    

    if(nome.trim().lenght < 3){
        return res.status(500).json({
            msg : "O nome tem que ter mais de 3 caracteres"
        })
    }

    if(localizacao.trim().length < 5) {
        return res.status(500).json({
            msg : "A localização tem que ter mais de 5 caracteres"
        })
    }

    return next()
}


module.exports = ValidateEvento 