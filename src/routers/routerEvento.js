const {Router} = require('express');
const EventoController = require('../controllers/eventoController');
const ValidateEvento = require('../middlewares/ValidateEvento');
const router = Router();





router.post('/', ValidateEvento, (req,res)=> {
    EventoController.create(req,res);
})

router.get('/', (req,res) => {
    EventoController.getAll(req,res);
})

router.get('/:id', (req,res) => {
    EventoController.getOne(req,res);
})

router.put('/:id', (req,res) => {
    EventoController.update(req,res);
})


router.delete('/:id', (req,res) => {
    EventoController.delete(req,res);
})

router.get('/:id/participante', (req,res) => {
    EventoController.getPar
})




module.exports = router;