var child_process = require('child_process');

console.log('initiating code');

var newProcess = child_process.spawn('node', ['file2.js'], {
    stdio: 'inherit' //to share console log of the parent process 
});

console.log('finished');