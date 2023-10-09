const express = require('express');

require('./database/index');

const app = express();

app.use(express.json());

app.listen(3336, console.log("Servidor está sendo executado na porata 3336! 🟢"));