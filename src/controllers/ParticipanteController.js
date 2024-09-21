const Evento = require('../models/Evento');
const Participante = require('../models/Participante');
const { get } = require('../routers/routerEvento');
const { getAll } = require('./eventoController');


const ParticipanteController = {
    create : async(req,res) => {
        try {
            const {nome, email, evento_id} = req.body;


            const existeEmail = await Participante.findOne({ where : { email : email}});
            console.log("existe ?",existeEmail)

            const evento = await Evento.findOne({where : {id : evento_id}});
            
            if(!evento){
                return res.status(400).json({
                    msg : 'Envie um evento existente'
                })
            }

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
            if(!participante){
                res.status(400).json({
                    msg : "Não foi encontrado o participante"
                })
            }

            const evento = await Evento.findOne({where : {id : evento_id}});
            
            if(!evento){
                return res.status(400).json({
                    msg : 'Envie um evento existente'
                })
            }
            
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
            if(!participante){
                return res.status(400).json({
                    msg : "Não foi encontrado o participante"
                })
            }
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

            if(isNaN(id_evento)){
                return res.status(400).json({
                    msg : "O parametro não e um número"
                })
            }

            const participantes = await Participante.findAll({where : {evento_id : id_evento}});

            if(participantes.length === 0){
                return res.status(500).json({
                    msg : "Não existe esse evento, ou não tem nenhum participante cadastrado nele"
                })
            }

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