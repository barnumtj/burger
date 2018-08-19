var express = require('express');
var parser = require('body-parser');
var exhbs = require('express-handlebars')
var methodOverride = require('method-override')
var app = express();
var port = process.env.PORT || 3000;
var db = require("./models")

app.use(express.static(__dirname + '/public'));

app.use(parser.urlencoded({
    extended: false
}));


app.use(methodOverride('_method'))
app.engine('handlebars', exhbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');



var routes = require('./controllers/routes.js')
app.use('/', routes)

db.sequelize.sync({ force: true}).then(function(){
    app.listen(port)
})

// app.listen(port, function(){
//     console.log("app listening on " + port)
// });





