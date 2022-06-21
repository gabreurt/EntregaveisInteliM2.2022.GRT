const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // divide os dados (facilita para entender)
const urlencondedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require("sqlite3").verbose();
// comando específico do sqlite para aceitação das mensagens de uma forma facilitada
const DBPATH = "lala.db";

const hostname = "127.0.0.1";
const port = 3071;

app.get("/getRecrutadores", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); 

  var db = new sqlite3.Database(DBPATH); 
  var sql = "SELECT * FROM curriculo ORDER BY id COLLATE NOCASE";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); 
});

app.listen(port, hostname, () => {
  //app escuta a porta e o hostname (deixa o servidor rodando)
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

app.use(express.static("../frontend/"));
