console.log("Server starting ...");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let proposal = {
 text:'',
 politicalp: '',
 year:'',
 candidate: ''
};
let resp = {
 error: false,
 codigo: 200,
 mensaje: ''
};
app.get('/', function(req, res) {
 resp = {
  error: true,
  codigo: 200,
  mensaje: 'Start point'
 };
 res.send(resp);
});
app.route('/proposal')
 .get(function (req, res) {
  resp = {
   error: false,
   codigo: 200,
   mensaje: ''
  };
  if(proposal.text === '' || proposal.politicalp === ''|| proposal.year === '' || proposal.candidate === '') {
   resp = {
    error: true,
    codigo: 501,
    mensaje: 'Proposal received'
   };
  } else {
   resp = {
    error: false,
    codigo: 200,
    mensaje: 'Proposal response',
    resp: proposal
   };
  }
  res.send(resp);
 })
 .post(function (req, res) {
   console.log(req.body);
  if(!req.body.text || !req.body.politicalp || !req.body.year || !req.body.candidate ) {
   resp = {
    error: true,
    codigo: 502,
    mensaje: 'All the data is required'
   };

  } else {
   if(proposal.text !== '' || proposal.politicalp !== '' || proposal.year !== '' || proposal.candidate !== '') {
    resp= {
     error: true,
     codigo: 503,
     mensaje: 'Proposal previously received'
    };
   } else {
    proposal = {
     text: req.body.text,
     politicalp: req.body.politicalp,
     year: req.body.year,
     candidate: req.body.candidate
    };
    resp= {
     error: false,
     codigo: 200,
     mensaje: 'Proposal created',
     respuesta: proposal
    };
   }
  }

  res.send(resp);
 })
 .put(function (req, res) {
  if(!req.body.text || !req.body.politicalp || !req.body.year || !req.body.candidate) {
   resp = {
    error: true,
    codigo: 502,
    mensaje: 'All the data is required'
   };
  } else {
   if(proposal.text !== '' || proposal.politicalp !== '' || proposal.year !== '' || proposal.candidate !== '') {
    resp = {
     error: true,
     codigo: 501,
     mensaje: 'Proposal not submitted'
    };
   } else {
     proposal = {
      text: req.body.text,
      politicalp: req.body.politicalp,
      year: req.body.year,
      candidate: req.body.candidate
    };
    resp = {
     error: false,
     codigo: 200,
     mensaje: 'Proposal updated',
     respuesta: proposal
    };
   }
  }

  res.send(resp);
 })
 .delete(function (req, res) {
  if(proposal.text !== '' || proposal.politicalp !== '' || proposal.year !== '' || proposal.candidate !== '') {
   resp = {
    error: true,
    codigo: 501,
    mensaje: 'Proposal not submitted'
   };
  } else {
   resp= {
    error: false,
    codigo: 200,
    mensaje: 'Proposal deleted'
   };
   proposal = {
    text: req.body.text,
    politicalp: req.body.politicalp,
    year: req.body.year,
    candidate: req.body.candidate
   };
  }
  res.send(resp);
 });
app.use(function(req, res, next) {
 resp = {
  error: true,
  codigo: 404,
  mensaje: 'URL not found'
 };
 res.status(404).send(resp);
});
app.listen(3000, () => {
 console.log("Server starting at port 3000");
});

// app.get('/search:/text',searchText);
//
// function searchText(request,response){
//   var =request.params.text;
//   var =resp;
//   if(text[text]){
//     status:"found";
//   }
// }
