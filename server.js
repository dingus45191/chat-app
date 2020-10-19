const express = require('express');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname))
app.use(bodyParser.json())

var messages = [
    { name: 'Tim', message: 'hi' },
    {name:'Jane', message: 'hello'}
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    res.sendStatus(200)
})


let server= 300
app.listen(server, () => {
    console.log('server is listening on port'+server)
})


