// Clases de implementacion de bases de datos en BackEnd usando node

// Importar librería dotenv para manejar variables de ambiente
const dotenv = require("dotenv").config();

// importar librería de pg para usar metodo pool
const { Pool } = require("pg");

const config = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX,
    idleTimeoutMillis: process.env.DB_IDLETIMEOUTMILLIS,
    connectionTimeoutMillis: process.env.DB_CONNECTIONTIMEOUTMILLIS,
};

const pool = new Pool(config);

pool.connect((error_conexion, client, release) => {
    client.query (`insert into peliculas (id, pelicula, ano_estreno, director) values (102, 'Parasitos', 2020, 'Hu Wok') returning *;`,
    (error_query, resul) => {
        console.log("error: ", error_query);
        release();
        console.log("registro: ", resul.rows[0]);
    })

    pool.end();
});




