const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    
    res.send('<h1>Ola mundo</h1>')

})

app.listen(3000)