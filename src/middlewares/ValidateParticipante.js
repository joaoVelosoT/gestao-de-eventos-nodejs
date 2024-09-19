const ValidateParticipante = (req,res,next) => {
    console.log("Caiu no middleware")

    const {nome, email, evento_id} = req.body;

    if(!nome || !email || !evento_id) {
        return res.status(500).json({
            msg : "Valide seus dados"
        })
    }

    return next()
}


module.exports = ValidateParticipante; 