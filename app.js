const express = require('express');

const app = express();
const bielefeldRouter = require('./example_bielefeld/stations_bielefeld');
const indexHTML = '\\frontend\\index.html';

const PORT = 6070;

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname + indexHTML}`);
})

app.get('/res/:name', (req, res, next) => {
    res.sendFile(`${__dirname + '\\frontend\\res\\' + req.params.name}`);
});

app.use('/bielefeld', bielefeldRouter);

console.log(__dirname),

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
})


