var bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(express.static('client'))
app.use(express.json())
app.use(express.urlencoded())
const fs = require('fs');
const port = 3001;
app.listen(port, ()=>{
  console.log(`Listening on port ${port}!`);
})

app.get('/', (req, res) => {
  console.log('Hello World');
  console.log(req.body);
});

app.post('/upload_json', (req, res) => {
  console.log('hiiii');
  //console.log(req.body);
  if (req.body.info) {
    //console.log(req.body.info)
    const csv = convertToCSV(req.body.info);
    fs.writeFile('data.csv', csv, (err) => {
      if (err) throw err;
      console.log('saved');
    })
    res.download('data.csv');
    res.status(200).send(csv);
  }
  res.end();

})

app.get('/download', (req, res) => {
  res.status(200).download('data.csv');
  console.log('completed the download');
})


var convertToCSV = function(jsonString) {
  var jsonObj = JSON.parse(jsonString);
  console.log(jsonObj);
  const replacer = (key,value) => value === null ? '' : value;
  const header = Object.keys(jsonObj);
  header.pop();
  let jsonArray = [];
  let objToArray = function(jsonObj) {
    if (jsonObj === null) {
      return;
    }
    let objChildren = jsonObj.children;
    delete jsonObj.children;
    jsonArray.push(jsonObj);
    for (let i = 0; i < objChildren.length; i++) {
      objToArray(objChildren[i]);
    }
  }
  objToArray(jsonObj);

  let csv = jsonArray.map(function(row) {
    return header.map(function(field) {
      return JSON.stringify(row[field], replacer)
    }).join(',')
  })
  console.log(typeof csv);
  csv.unshift(header.join(','))
  csv = csv.join('\n')
  console.log(csv);
  return csv;
}



