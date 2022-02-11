const express = require('express');

const app = express();
const bielefeldRouter = require('./example_bielefeld/stations_bielefeld');

const PORT = 6070;

app.use('/bielefeld', bielefeldRouter);

app.listen(PORT, () => {
    console.log(`Server listens on port ${PORT}`);
})


