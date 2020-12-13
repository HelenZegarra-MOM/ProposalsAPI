console.log('Server starting ...');
const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => {
  console.log('Server starting at port 3000');
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

//const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());


app.get('/proposals', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  });
});

app.post('/proposals', (request, response) => {
  const data = request.body;
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  response.json(data);
  console.log("proposal received");
  console.log(data);
});


// 
// app.get('/search:/text',searchText);
//
// function searchText(request,response){
//   var = request.params.proposal;
//   var =resp;
//   if(text[text]){
//     status:"found";
//   }
//   }
