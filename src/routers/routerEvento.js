const {Router} = require('express');
const EventoController = require('../controllers/eventoController');
const ValidateEvento = require('../middlewares/ValidateEvento');
const ValidateID = require('../middlewares/ValidateID');
const router = Router();





router.post('/', ValidateEvento, (req,res)=> {
    EventoController.create(req,res);
})

router.get('/', (req,res) => {
    EventoController.getAll(req,res);
})

router.get('/:id', ValidateID, (req,res) => {
    EventoController.getOne(req,res);
})

router.put('/:id',ValidateID,ValidateEvento, (req,res) => {
    EventoController.update(req,res);
})


router.delete('/:id', ValidateID, (req,res) => {
    EventoController.delete(req,res);
})

router.get('/:id/participante', ValidateID, (req,res) => {
    EventoController.getByParticipantes(req,res);
})




module.exports = router;