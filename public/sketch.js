function setup() {
  noCanvas();
  testPost();
}

async function testPost() {
  let proposal = {
    text: 'hello',
    politicalp: 'a',
    year: '1900',
    candidate: 'test',
  };
  const data = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(proposal),
  };
  const response = await fetch('proposal', data);
  const json = await response.json();
  console.log(json);
}
