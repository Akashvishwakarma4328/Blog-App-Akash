const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {

    res.json('test Ok');

})
app.listen(4000);