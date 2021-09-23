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

// pool.connect((error_conexion, client, release) => {

//     const datosPelicula = [103, 'La Cosa', 1984, 'John Carpenter']

//     client.query (`insert into peliculas (id, pelicula, ano_estreno, director) values ($1, $2, $3, $4) returning *;`,
//     datosPelicula, (error_query, resul) => {
//         console.log("error: ", error_query);
//         release();
//         console.log("registro: ", resul.rows[0]);
//     })

//     pool.end();
// });


// pool.connect(async (error_conexion, client, release) => {

//     const datosPelicula = [105, 'La Cosa', 1984, 'John Carpenter']

//     const res = await client.query (`insert into peliculas (id, pelicula, ano_estreno, director) values ($1, $2, $3, $4) returning *;`,
//     datosPelicula);


//     release();
//     console.log("registro: ", res.rows[0]);

//     pool.end();
// });


// pool.connect(async (error_conexion, client, release) => {

//     const datosPelicula = [106, 'La Cosa 2', 1988, 'John Carpenter'];

//     const sqlQuery = {
//         text: `insert into peliculas (id, pelicula, ano_estreno, director) values ($1, $2, $3, $4) returning *;`,
//         values: datosPelicula
//     }

//     const res = await client.query (sqlQuery);

//     release();
//     console.log("registro: ", res.rows[0]);

//     pool.end();
// });


pool.connect(async (error_conexion, client, release) => {

    const datosPelicula = [106, 'La Cosa 2', 1988, 'John Carpenter'];
    const ids = [90];

    const sqlQuery = {
        text: `select * from peliculas where id > $1;`,
        rowMode: 'array',
        values: ids
    }

    try {
        const res = await client.query (sqlQuery);
        console.log("registro: ", res.rows);
    } 
    catch (error) {
        console.log("Aqui hay un errorcito:", error.message);
    }
    finally {
        release();
    }

    pool.end();
});