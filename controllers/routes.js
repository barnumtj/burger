var express = require('express');
var router = express.Router();
var burger = require('../models/burgers.js')

router.get('/', function (req, res) {
    burger.all(function (burgerData) {
        res.render('index', { burgerData });
        

    })
});

router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function() {
         res.redirect('/')
    })
});
router.post('/burgers/create', function (req, res) {
    burger.create(req.body.burger_name, function() {
        res.redirect('/');
    })
});


module.exports = router;

