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
    {id: 24, country: "Korea Republic", fifa_code: "KOR", image: 'http://flags.fmcdn.net/data/flags/w1160/kr.png'},
    {id: 21, country: "Germany", fifa_code: "GER", image: 'http://flags.fmcdn.net/data/flags/w1160/de.png'},
    {id: 20, country: "Serbia", fifa_code: "SRB", image: 'http://flags.fmcdn.net/data/flags/w1160/rs.png'},
    {id: 19, country: "Costa Rica", fifa_code: "CRC", image: 'http://flags.fmcdn.net/data/flags/w1160/cr.png'},
    {id: 25, country: "Belgium", fifa_code: "BEL", image: 'http://flags.fmcdn.net/data/flags/w1160/be.png'},
    {id: 29, country: "Poland", fifa_code: "POL", image: 'http://flags.fmcdn.net/data/flags/w1160/pl.png'},
    {id: 30, country: "Senegal", fifa_code: "SEN", image: ''},
    {id: 28, country: "England", fifa_code: "ENG", image: ''},
    {id: 9, country: "France", fifa_code: "FRA", image: ''},
    {id: 15, country: "Croatia", fifa_code: "CRO", image: ''},
    {id: 26, country: "Panama", fifa_code: "PAN", image: ''},
    {id: 27, country: "Tunisia", fifa_code: "TUN", image: ''},
    {id: 13, country: "Argentina", fifa_code: "ARG", image: ''},
    {id: 5, country: "Portugal", fifa_code: "POR", image: ''},
    {id: 22, country: "Mexico", fifa_code: "MEX", image: ''},
    {id: 32, country: "Japan", fifa_code: "JPN", image: ''},
    {id: 31, country: "Colombia", fifa_code: "COL", image: ''},
    {id: 18, country: "Switzerland", fifa_code: "SUI", image: ''},
    {id: 4, country: "Uruguay", fifa_code: "URU", image: ''},
    {id: 17, country: "Brazil", fifa_code: "BRA", image: ''},
    {id: 6, country: "Spain", fifa_code: "ESP", image: ''},
    {id: 2, country: "Saudi Arabia", fifa_code: "KSA", image: ''},
    {id: 3, country: "Egypt", fifa_code: "EGY", image: ''},
    {id: 7, country: "Morocco", fifa_code: "MAR", image: ''},
    {id: 8, country: "Iran", fifa_code: "IRN", image: ''},
    {id: 23, country: "Sweden", fifa_code: "SWE", image: ''},
    {id: 10, country: "Australia", fifa_code: "AUS", image: ''},
    {id: 11, country: "Peru", fifa_code: "PER", image: ''},
    {id: 14, country: "Iceland", fifa_code: "ISL", image: ''},
    {id: 16, country: "Nigeria", fifa_code: "NGA", image: ''},
    {id: 1, country: "Russia", fifa_code: "RUS", image: ''},
    {id: 12, country: "Denmark", fifa_code: "DEN", image: ''}
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