function setup() {
  noCanvas();
let keywords, proposal, candidate, politicalparty;

const button = document.getElementById('submit');
button.addEventListener('click', async event => {
const keywords = document.getElementById('keywords').value;
const proposal = document.getElementById('proposal').value;
const candidate = document.getElementById('candidate').value;
const politicalparty= document.getElementById('politicalparty').value;

const data = { keywords, proposal, candidate, politicalparty };

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/proposals', options);
  const json = await response.json();
  console.log(json);
});



}
