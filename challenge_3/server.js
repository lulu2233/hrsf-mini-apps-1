const express = require('express');
const app = express();
const prot = 3000;
const path = require('path');

app.use('/', express.static(path.join('public')))
app.listen(port, ()=>{
  console.log(`Listening on port ${port}!`);
})

