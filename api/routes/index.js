const express = require('express');
const router = express.Router();

  
   
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/contato', (req, res) => {
    res.render('contato.html')
});

module.exports = router;