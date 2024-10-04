//-- Helló Express szöveges üzenetet küld vissza kérésre
const express = require('express');
const app = express();
const port = 3000;
// JSON adatok fogadásához  szükséges middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Helló Express!');
});

app.get('/futar', (req, res) => {
    res.send('A futár adatai: név: Józsi, kor: 32, foglalkozás: futár');
});
app.get('/pizza', (req, res) => {
    res.send('A pizza adatai: név: Sonkás, ár: 1200 Ft');
});
app.post('/pizza', (req, res) => {
    let ujPizza = req.body;
    res.send(`Az új pizza adatai: név: ${ujPizza.nev} , ár: ${ujPizza.ar} Ft`);
});

app.listen(port, () => {
    console.log(`Az alkalmazás a http://localhost:${port} címen elérhető.`);
});