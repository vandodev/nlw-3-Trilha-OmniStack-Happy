import express, { json } from 'express';

const app= express();

app.use(express.json);

app.get('/users/:id',(request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
});

app.listen(3333);