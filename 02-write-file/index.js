const fs = require('node:fs');
const path = require('path');
const process = require('process');
const readline = require('readline');
const {stdin: input, stdout: output} = require('process');

let writeFile = fs.createWriteStream(path.join(__dirname, 'test.txt'));
const text = readline.createInterface({input, output});

text.setPrompt('Enter message \n');
text.prompt();
text.on('line', (answer) => {

  if(answer === 'exit') {
    text.close();
    return;
  }
  console.log('you entered: ' + answer.toString());
  writeFile.write(answer + '\n');
  text.prompt();
});

process.on('exit', () => {
  console.log('Thank you!');
  writeFile.close();
});
