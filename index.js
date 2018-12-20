const express = require('express');

const server = express();
const PORT = 5434;
server.use(express.json());

server.get('/crayons', (req,res) => {

});

server.get('/crayons/:id', (req,res) => {

});


server.post('/crayons', (req,res) => {
    
});

server.put('/crayons/:id', (req,res) => {

});

server.delete('/crayons/:id', (req,res) => {

});

server.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
});