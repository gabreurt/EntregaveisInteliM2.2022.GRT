const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const sqlite3 = require("sqlite3").verbose();
const app = express();
// comando específico do sqlite para aceitação das mensagens de uma forma facilitada
const DBPATH = "lala.db";

const hostname = "127.0.0.1";
const port = 3071;

// app.get("/users", (req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Access-Control-Allow-Origin", "*"); 

//   var db = new sqlite3.Database(DBPATH); 
//   var sql = "SELECT * FROM curriculo ORDER BY id COLLATE NOCASE";
//   db.all(sql, [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     res.json(rows);
//   });
//   db.close(); 
// });

/* Definição dos endpoints */

/****** CRUD ******************************************************************/

// Retorna todos registros (é o R do CRUD - Read)
app.get('/users', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = 'SELECT * FROM curriculo ORDER BY recrutador COLLATE NOCASE';
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post('/userinsert', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "INSERT INTO curriculo (id, recrutador) VALUES ('" + req.body.title + "3, terceiro)";
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
app.post('/userupdate', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "UPDATE curriculo SET recrutador = '" + req.body.title + "' WHERE ID = " + req.body.userId;
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
app.post('/userdelete', urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*'); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM curriculo WHERE id = " + req.body.userId;
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
