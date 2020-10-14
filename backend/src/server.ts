import express, { json } from 'express';
import './database/connections';

const app= express();

app.use(express.json);

app.get('/users/',(request, response) => {
    return response.json({message:'Olá mundo'});
});

app.listen(3333);