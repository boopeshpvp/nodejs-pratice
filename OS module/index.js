// const os = require('node:os');    package.json we need to "type":"commonjs",
// import os from 'node:os' es 6 module using import - for this in package.json we need to "type":"module",

const os = require('node:os'); 
// console.log('os', os );

const totalMemory = os.totalmem();  // it shows the data in bytes format and data is the ram
const freeMemory = os.freemem(); // 

const upTimeForMachine = os.uptime();

console.log(`Total Memory : ${totalMemory}`);

// Convert to MB
const totalMemoryInMB = totalMemory / (1024 * 1024);
console.log(`Total Memory: ${totalMemoryInMB.toFixed(2)} MB`);

// Convert to GB
// const totalMemoryInGB = totalMemory / (1024 * 1024 * 1024);
// console.log(`Total Memory: ${totalMemoryInGB.toFixed(2)} GB`);

// const totalFreeMemInGB = freeMemory / (1024 * 1024 * 1024);
// console.log(`free Memory: ${totalFreeMemInGB.toFixed(2)} GB`);


// console.log(`Free Memory : ${freeMemory}`);


// console.log(`Up Time : ${upTimeForMachine}`);  
//Returns the system uptime in number of seconds. calculates the time when system last opening to current time 

// const endl = os.EOL; //The operating system-specific end-of-line marker.
// console.log(`This is on a ${endl} newline.  \n gokul `);

// const arch = os.arch(); // Returns the operating system CPU windows architecture for which the Node.js binary was compiled. Possible values are 'arm', 'arm64', 'ia32', 'loong64', 'mips', 'mipsel', 'ppc', 'ppc64', 'riscv64', 's390', 's390x', and 'x64'.
// console.log(`Architecture is : ${arch}`)



const cpus = os.cpus(); //Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
// console.log(cpus);



// const platform = os.platform();
// if (platform === 'win32') {
//     console.log('Running on Windows');
// } else if (platform === 'linux') {
//     console.log('Running on Linux');
// }


