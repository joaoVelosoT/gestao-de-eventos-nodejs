const ValidateID = (req,res,next) => {
    const {id} = req.params;

    if(isNaN(id)){
        return res.status(400).json({
            msg : "O parametro não e um número"
        })
    }

    return next();
}


module.exports =ValidateID