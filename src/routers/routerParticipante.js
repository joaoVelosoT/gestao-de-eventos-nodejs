const {Router} = require('express');
const ParticipanteController = require('../controllers/ParticipanteController');
const ValidateParticipante = require('../middlewares/ValidateParticipante');
const ValidateID = require('../middlewares/ValidateID');
const router = Router();



router.get('/por-evento/:id_evento',(req,res)=> {
    ParticipanteController.getByEvento(req,res);
})

router.post('/', ValidateParticipante, (req,res)=> {
    ParticipanteController.create(req,res);
})

router.get('/', (req,res) => {
    ParticipanteController.getAll(req,res);
})

router.get('/:id',ValidateID, (req,res) => {
    ParticipanteController.getOne(req,res);
})

router.put('/:id',ValidateID,ValidateParticipante, (req,res) => {
    ParticipanteController.update(req,res);
})


router.delete('/:id',ValidateID, (req,res) => {
    ParticipanteController.delete(req,res);
})




module.exports = router;