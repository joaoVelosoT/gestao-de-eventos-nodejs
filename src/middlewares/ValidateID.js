const ValidateID = (req,res,next) => {
    const {id, id_evento} = req.params;
    if(!id){
        if(isNaN(id_evento)){
            return res.status(400).json({
                msg : "O parametro não e um número"
            })
        }
    }

    if(isNaN(id)){
        return res.status(400).json({
            msg : "O parametro não e um número"
        })
    }
    

    return next();
}


module.exports = ValidateID