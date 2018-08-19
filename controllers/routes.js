var express = require('express');
var router = express.Router();
var db = require('../models/')



router.get('/', function (req, res) {

    db.Burger.findAll()
    .then(function(dbBurger){
        console.log();
        var hbsObject = {burger: dbBurger};
        console.log(dbBurger)
        
        return res.render('index', hbsObject)
    });

});
    // burger.all(function (burgerData) {
    //     res.render('index', { burgerData });
        

    // })
// });

router.put('/burgers/update', function (req, res) {
   db.Burger.update(
       {
       devoured: true
   }, {
       where: {
           id: req.body.burger_id
       }
   }).then(function(dbBurger){
       res.redirect('/')
   })

});

router.post('/burgers/create', function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(dbBurger){
        console.log(res);
        res.redirect("/")
    })
});


module.exports = router;