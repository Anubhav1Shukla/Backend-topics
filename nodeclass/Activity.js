const fs = require('fs');

const fileName = 'lpu.txt';
const jsonData = {
  name: 'John',
  age: 25,
  city: 'Example City'
};

fs.writeFileSync(fileName, JSON.stringify(jsonData));

const jsonString = fs.readFileSync(fileName, 'utf8');
const jsonConverted = JSON.parse(jsonString);
console.log('Converted JSON:', jsonConverted);