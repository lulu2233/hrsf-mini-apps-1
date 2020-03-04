var bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(express.static('client'))
app.use(express.json())
app.use(express.urlencoded());
const port = 3000
app.listen(port, ()=>{
  console.log(`Listening on port ${port}!`);
})

app.get('/', (req, res) => {
  console.log('Hello World');
  console.log(req.body);
});

app.post('/upload_json', (req, res) => {
  console.log('hiiii');
  console.log(req.body);
  console.log(typeof req.body);
  res.send(req.body);
  res.end()
})

var convertToCVS = function(objArray) {
  var array = JSON.parse(objArray);
}



