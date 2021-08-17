import express from 'express';
import { getCurrentWeather } from './functions/currentWeather/currentWeather';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.json({port: port})
})

app.get('/current/:query', async (req, res) => {
    const query = req.params.query;
    const data = await getCurrentWeather(query);

    res.json({response: data})
})

const port = 5555;

app.listen(port, () => {
    console.log('The application is listening on port', port);
})
