const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

const port = 8080;

app.get('/api/stuff', (req,res,next)=>{
    res.send('Jonah is the greatest')
})

app.listen(port, ()=>{
    console.log(`Listening  on port ${port}`)
})