const {Router} = require('express')
const router = Router();
const routerEvento = require('./routerEvento');
const routerParticipante = require('./routerParticipante');

router.use('/evento', routerEvento)
router.use('/participante', routerParticipante);



module.exports = router;