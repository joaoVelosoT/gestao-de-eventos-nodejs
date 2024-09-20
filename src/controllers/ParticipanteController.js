const Participante = require('../models/Participante');
const { get } = require('../routers/routerEvento');
const { getAll } = require('./eventoController');


const ParticipanteController = {
    create : async(req,res) => {
        try {
            const {nome, email, evento_id} = req.body;


            const existeEmail = await Participante.findOne({ where : { email : email}});
            console.log("existe ?",existeEmail)

            

            if(existeEmail){
                return res.status(400).json({
                    msg : "Esse email ja existe"
                })
            }

            await Participante.create({
                nome : nome,
                email : email,
                evento_id : evento_id
            })


            res.status(200).json({
                msg : "Participante criado com sucesso"
            })
        } catch (error) {
            res.status(400).json({
                msg : "Contate o suporte"
            })
            console.error(error)
        }
    },
    getAll : async(req,res) => {
        try {
            const participantes = await Participante.findAll();


            res.status(200).json({
                participantes
            })
        } catch (error) {
            res.status(400).json({
                msg : "Contate o suporte"
            })
            console.error(error)
        }
    },
    getOne : async(req,res) => {
        try {

            const {id} = req.params
            const participante = await Participante.findByPk(id);

            res.status(200).json({
                participante
            })
        } catch (error) {
            res.status(400).json({
                msg : "Contate o suporte"
            })
            console.error(error)
        }
    },
    update : async(req,res) => {
        try {
            const {id} = req.params
            const {nome, email, evento_id} = req.body

            const participante = await Participante.findByPk(id)

            await participante.update({nome, email, evento_id});

            res.status(200).json({
                msg : "O Participante foi atualizado",
                participante
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                msg : "Contate o suporte"
            })
        }
    },
    delete : async(req,res) => {
        try {
            const {id} = req.params;

            const participante = await Participante.findByPk(id);
            
            await participante.destroy();


            res.status(200).json({
                msg : "O Participante foi deletado",
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                msg : "Contate o suporte"
            })
        }
    },
    getByEvento : async (req,res) => {
        try {
            const {id_evento} = req.params;

            const participantes = await Participante.findAll({where : {evento_id : id_evento}});

            res.status(200).json({
                participantes
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                msg : "Contate o suporte"
            })
        }
    }

}



module.exports = ParticipanteController;