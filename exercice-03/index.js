const express = require('express');
const PORT = 3300 ;
const app = express();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));