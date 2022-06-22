const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // divide os dados (facilita para entender)
const urlencodedParser = bodyParser.urlencoded({ extended: false })
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

// Insere um registro (é o C do CRUD - Create)
app.post('/insertRecrutador', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO curriculo (Recrutador) VALUES ('" + req.body.recrutador + "')";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post('/updateRecrutador', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE curriculo SET Recrutador = '" + req.body.recrutador + "' WHERE ID = " + req.body.id;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

// Exclui um registro (é o D do CRUD - Delete)
app.post('/deleteRecrutador', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM curriculo WHERE ID = " + req.body.id;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], err => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});






app.listen(port, hostname, () => {
  //app escuta a porta e o hostname (deixa o servidor rodando)
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

app.use(express.static("../frontend/"));
