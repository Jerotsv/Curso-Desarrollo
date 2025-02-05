import express from './app.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log('example app listening on port 3000');
});
