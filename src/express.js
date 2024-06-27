import express, { Router } from 'express';
import fetch from './index';

const app = new express();

app.all("/", (req, res) => {
    response = fetch(req, "", "");
    res.send(response);
})

app.listen(9494);