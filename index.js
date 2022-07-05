const express = require('express');
const cors = require('cors');
const routeRaM = require('./src/routes/character.route');
const connectToDatabase = require('./src/database/DBConnection');
const swaggerRoute = require('./src/routes/swagger.route')

const port = 3000;
const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/RickandMorty', routeRaM);
app.use('/api-docs', swaggerRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
