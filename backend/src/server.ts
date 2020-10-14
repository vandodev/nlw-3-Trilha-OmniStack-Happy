import express, { json } from 'express';

const app= express();

app.get('/users',(request, response) => {
    //console.log('Teste');
    //return response.send('Olá mundo');
    return response.json({message:'Olá mundo'});
});

app.listen(3333);