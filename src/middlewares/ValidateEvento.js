const ValidateEvento = (req,res,next) => {
    console.log("Caiu no middleware")

    const {nome, data, localizacao} = req.body;

    if(!nome || !data || !localizacao) {
        return res.status(500).json({
            msg : "Valide seus dados"
        })
    }

    return next()
}


module.exports = ValidateEvento 