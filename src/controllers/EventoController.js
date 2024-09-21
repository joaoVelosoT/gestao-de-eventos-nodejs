const Evento = require('../models/Evento');
const Participante = require('../models/Participante');

const EventoController = {
    create : async(req,res) => {
        try {
            const {nome, data, localizacao} = req.body;

            await Evento.create({
                nome : nome,
                data : data,
                localizacao : localizacao
            })


            res.status(200).json({
                msg : "Evento criado com sucesso"
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
            const eventos = await Evento.findAll();


            res.status(200).json({
                eventos
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
            const evento= await Evento.findByPk(id);

            

            if(!evento){
                return res.status(400).json({
                    msg : "Evento não encontrado"
                })
            }

            return res.status(200).json({
                evento
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
            const {nome, data, localizacao} = req.body

            const evento = await Evento.findByPk(id)

            if(!evento){
                return res.status(400).json({
                    msg : "Evento não encontrado"
                })
            }

            await evento.update({nome, data, localizacao});

            res.status(200).json({
                msg : "O evento foi atualizado",
                evento
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

            const evento = await Evento.findByPk(id);
            if(!evento){
                return res.status(400).json({
                    msg : "Evento não encontrado"
                })
            }
            await evento.destroy();


            res.status(200).json({
                msg : "O evento foi deletado",
            })
        } catch (error) {
            console.error(error)
            res.status(400).json({
                msg : "Contate o suporte"
            })
        }
    },
    getByParticipantes : async (req,res) => {
        try {
            const {id} = req.params;

            const participantes = await Participante.findAll({where : {evento_id : id}});
            
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



module.exports = EventoController;