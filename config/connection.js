var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "testtest",
    database: "burger_db"
  });
  
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: '	y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 's7tr5c8sopk0mytz',
    password: 'd8a80bnstmu6w7wl',
    database: 'owyofmd2ozrp0kus'

  })
}

  // Make connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports = connection;