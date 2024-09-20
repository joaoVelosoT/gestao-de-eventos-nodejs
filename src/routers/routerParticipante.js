const {Router} = require('express');
const ParticipanteController = require('../controllers/ParticipanteController');
const ValidateParticipante = require('../middlewares/ValidateParticipante');
const router = Router();



router.get('/por-evento/:id_evento', (req,res)=> {
    ParticipanteController.getByEvento(req,res);
})

router.post('/', ValidateParticipante, (req,res)=> {
    ParticipanteController.create(req,res);
})

router.get('/', (req,res) => {
    ParticipanteController.getAll(req,res);
})

router.get('/:id', (req,res) => {
    ParticipanteController.getOne(req,res);
})

router.put('/:id', (req,res) => {
    ParticipanteController.update(req,res);
})


router.delete('/:id', (req,res) => {
    ParticipanteController.delete(req,res);
})




module.exports = router;