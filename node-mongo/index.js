const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['roy', 'rashi', 'raisha', 'ranisa']

app.get('/', (req, res) => {
    res.send ("thank you very much");
})

app.get ('/users/:id', (req, res) => {
    const id = req.params.id;
    const name = users[id];
    res.send({ id, name });
})

 
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id = 22;
    res.send(user);
})

app.listen(3000, () => console.log('listening to port 3000'));