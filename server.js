const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

let users = ['oscar', 'juan', 'marcos', 'julieta'];
let books = [
    {titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien'},
    {titulo: "Cancion de hielo y fuego", autor: 'George RR Martin'},
    {titulo: "hola mundo", autor: 'hola mundo'}
];

let futbol = [
    {id: 1, status: true, country: "Korea Republic", fifa_code: "KOR", image: 'http://flags.fmcdn.net/data/flags/w1160/kr.png'},
    {id: 2, status: false, country: "Germany", fifa_code: "GER", image: 'http://flags.fmcdn.net/data/flags/w1160/de.png'},
    {id: 3, status: true, country: "Serbia", fifa_code: "SRB", image: 'http://flags.fmcdn.net/data/flags/w1160/rs.png'},
    {id: 4, status: true, country: "Costa Rica", fifa_code: "CRC", image: 'http://flags.fmcdn.net/data/flags/w1160/cr.png'},
    {id: 5, status: false, country: "Belgium", fifa_code: "BEL", image: 'http://flags.fmcdn.net/data/flags/w1160/be.png'},
    {id: 6, status: true, country: "Poland", fifa_code: "POL", image: 'http://flags.fmcdn.net/data/flags/w1160/pl.png'},
    {id: 7, status: true, country: "Senegal", fifa_code: "SEN", image: 'http://flags.fmcdn.net/data/flags/w1160/sn.png'},
    {id: 8, status: true, country: "England", fifa_code: "ENG", image: 'http://flags.fmcdn.net/data/flags/w1160/gb.png'},
    {id: 9, status: true, country: "France", fifa_code: "FRA", image: 'http://flags.fmcdn.net/data/flags/w1160/fr.png'},
    {id: 10, status: true, country: "Croatia", fifa_code: "CRO", image: 'http://flags.fmcdn.net/data/flags/w1160/hr.png'},
    {id: 11, status: true, country: "Panama", fifa_code: "PAN", image: 'http://flags.fmcdn.net/data/flags/w1160/pa.png'},
    {id: 12, status: true, country: "Tunisia", fifa_code: "TUN", image: 'http://flags.fmcdn.net/data/flags/w1160/tn.png'},
    {id: 13, status: true, country: "Argentina", fifa_code: "ARG", image: 'http://flags.fmcdn.net/data/flags/w1160/ar.png'},
    {id: 14, status: false, country: "Portugal", fifa_code: "POR", image: 'http://flags.fmcdn.net/data/flags/w1160/pt.png'},
    {id: 15, status: true, country: "Mexico", fifa_code: "MEX", image: 'http://flags.fmcdn.net/data/flags/w1160/mx.png'},
    {id: 16, status: true, country: "Japan", fifa_code: "JPN", image: 'http://flags.fmcdn.net/data/flags/w1160/jp.png'},
    {id: 17, status: false, country: "Colombia", fifa_code: "COL", image: 'http://flags.fmcdn.net/data/flags/w1160/co.png'},
    {id: 18, status: true, country: "Switzerland", fifa_code: "SUI", image: 'http://flags.fmcdn.net/data/flags/w1160/ch.png'},
    {id: 19, status: true, country: "Uruguay", fifa_code: "URU", image: 'http://flags.fmcdn.net/data/flags/w1160/uy.png'},
    {id: 20, status: false, country: "Brasil", fifa_code: "BRA", image: 'http://flags.fmcdn.net/data/flags/w1160/br.png'},
    {id: 21, status: true, country: "Spain", fifa_code: "ESP", image: 'http://flags.fmcdn.net/data/flags/w1160/es.png'},
    {id: 22, status: true, country: "Saudi Arabia", fifa_code: "KSA", image: 'http://flags.fmcdn.net/data/flags/w1160/sa.png'},
    {id: 23, status: true, country: "Egypt", fifa_code: "EGY", image: 'http://flags.fmcdn.net/data/flags/w1160/eg.png'},
    {id: 24, status: false, country: "Morocco", fifa_code: "MAR", image: 'http://flags.fmcdn.net/data/flags/w1160/ma.png'},
    {id: 25, status: true, country: "Iran", fifa_code: "IRN", image: 'http://flags.fmcdn.net/data/flags/w1160/ir.png'},
    {id: 26, status: true, country: "Sweden", fifa_code: "SWE", image: 'http://flags.fmcdn.net/data/flags/w1160/se.png'},
    {id: 27, status: true, country: "Australia", fifa_code: "AUS", image: 'http://flags.fmcdn.net/data/flags/w1160/au.png'},
    {id: 28, status: false, country: "Peru", fifa_code: "PER", image: 'http://flags.fmcdn.net/data/flags/w1160/pe.png'},
    {id: 29, status: true, country: "Iceland", fifa_code: "ISL", image: 'http://flags.fmcdn.net/data/flags/w1160/is.png'},
    {id: 30, status: true, country: "Nigeria", fifa_code: "NGA", image: 'http://flags.fmcdn.net/data/flags/w1160/ng.png'},
    {id: 31, status: false, country: "Russia", fifa_code: "RUS", image: 'http://flags.fmcdn.net/data/flags/w1160/ru.png'},
    {id: 32, status: true, country: "Denmark", fifa_code: "DEN", image: 'http://flags.fmcdn.net/data/flags/w1160/dk.png'}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ********************************************************************
// ********************************************************************

// URL raiz de la api
// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/worldcup', (req, res) => {
    res.send(futbol)
})

// URL para listar todos los usuarios
// http://127.0.0.1:5000/users
app.get('/users', (req, res) => {
    res.send(users)
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users
app.post('/users', (req, res) => {
    let data = req.query;
    users.push(data.user_name)
    res.send("New user add")
})

// URL para actualizar un usuario
// http://127.0.0.1:5000/users/1
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = data.user_name
    res.send("User update")
})

// URL para eliminar un usuario
// http://127.0.0.1:5000/users/1
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})

// ********************************************************************
// ********************************************************************

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})