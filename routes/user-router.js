//Express
const Router=require("express").Router;
var router=Router();
//const snickers=require("snickers"); console.log(snickers.lmao()); nao tires o comentario isto e meme n funciona
//Database
const dbConfig = require("../database/db-config.json");   //Importar configuração da base de dados
const mysql = require("mysql"); //bilbioteca de mysql https://www.npmjs.com/package/mysql
var connection = mysql.createConnection(dbConfig);


router.get("/users", (req,res)=>{
    //Snickers&Arroz.js

    connection.connect();
    const sql = "SELECT * FROM app_user";
    connection.query(sql, function (error, results, fields) {
        if (error){
            res.status(404).json("Not found");
            throw error;
        }
        console.log('Enviei para o browser: ', results);
        let resultTable = `
        <table style="width:40%">
        <tr>
          <th>Name</th>
          <th>Password</th> 
        </tr>
        `;

        results.forEach(tableLine=> {
            resultTable+=`
            <tr>
                <td>${tableLine.username}</td>
                <td>${tableLine.password}</td>
            </tr>
            `
        });

        resultTable+="</table>"

        res.send(resultTable);
    });
    connection.end();
});

router.post("/users",(req,res)=>{
    console.log(req.body);
});

module.exports=router;
