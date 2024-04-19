const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {

    const params = Array(
        request.body.email,
        request.body.nome,
        request.body.telefone
    );

    const query = "INSERT INTO tasks(email, nome, telefone) VALUES(?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, sem sucesso :(",
                    data: err
                })
        }
    })
}

module.exports = {
    storeTask
}