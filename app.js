const express = require('express');
const { exec } = require('child_process');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  exec('python quickstart.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error}`);
      res.render('index', { output: 'Error executing Python script' });
    } else {
      console.log(`Python script output: ${stdout}`);
      res.render('index', { output: stdout });
    }
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
