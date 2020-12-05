const express = require('express');
const router = express.Router();

  
   
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/agendamento', (req, res) => {
    res.render('pages/agendamento.html')
});



router.get('/contato', (req, res) => {
    res.render('pages/contato.html')
});

router.get('/sobrenos', (req, res) => {
    res.render('pages/sobrenos.html')
});

module.exports = router;