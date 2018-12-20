const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile');
const server = express();
const db = knex(dbConfig.development);
const PORT = 5434;
server.use(express.json());


server.get('/crayons', (req,res) => {
          console.log('working now!!!')
});

server.get('/crayons/:id', (req,res) => {

});

//INSERT INTO CRAYONS(color, perc_used) VALUES('red', .9);
server.post('/crayons', (req,res) => {
    const crayon = req.body;
    db('crayons').insert(crayon)
      .then( ids => {
         res.status(201).json(ids); 
      })
      .catch(err => {
          res.status(500).json({err: 'Failed to insert crayon'});
      });
});

server.put('/crayons/:id', (req,res) => {

});


server.delete('/crayons/:id', (req,res) => {

});


server.listen(PORT, () => {
    console.log(`Listening on the port ${PORT}`);
});