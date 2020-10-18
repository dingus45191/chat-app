const express = require('express');
let app = express();

app.use(express.static(__dirname))
let server= 300
app.listen(server, () => {
    console.log('server is listening on port'+server)
})


