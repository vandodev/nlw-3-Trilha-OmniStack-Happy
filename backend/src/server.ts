import express, { json } from 'express';
import './database/connections';

const app= express();

app.use(express.json());

app.post('/orphanages',(request, response) => {
    console.log(request.body);
    return response.json({message:'Olá mundo'});
});

app.listen(3333);