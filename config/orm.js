var connection = require('./connection.js');

var orm = { 
  all: function(tableInput, callback){
    var queryString = "SELECT * FROM " + tableInput + ";"
      connection.query(queryString, function(err, res){
       if (err) throw err;
      callback(res);
    });
  },
  update: function(tableInput, condition, callback) {
    connection.query("UPDATE " +tableInput + " SET devoured=true WHERE id=" +condition+";", function(err, res){
      if (err) throw err;
      callback(res)
    })
  },
  create: function(tableInput, value, callback){
    connection.query('INSERT INTO '+tableInput+" (burger_name) VALUES ('"+value+"');", function(err, res){
      if (err) throw err;
      callback(res)
    })
  }
}

module.exports = orm;
