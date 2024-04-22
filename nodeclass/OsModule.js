const os = require('os');

// Get the operating system platform
const platform = os.platform();
console.log('Platform:', platform);

// Get the operating system architecture
const architecture = os.arch();
console.log('Architecture:', architecture);

// Get the operating system release
const release = os.release();
console.log('Release:', release);

// Get the total amount of system memory in bytes
const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory);

// Get the amount of free system memory in bytes
const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory);

// Get the number of CPU cores
const cpuCores = os.cpus().length;
console.log('CPU Cores:', cpuCores);

// Get the user's home directory
const homeDirectory = os.homedir();
console.log('Home Directory:', homeDirectory);

// Get the current user's username
const username = os.userInfo().username;
console.log('Username:', username);


//Get the Os type
const type=os.type();
console.log('Os type:',type);

//Get the Os version
const version=os.version();
console.log('Version:',version);

//Get the Os parallelism
const parallelism = os.availableParallelism();
console.log('Parallelism:', parallelism);


// Get network interface
const networkInterfaces = os.networkInterfaces();
console.log('Network Interfaces:', networkInterfaces);



