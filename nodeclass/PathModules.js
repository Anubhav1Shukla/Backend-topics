const path = require('path');

const filePath = '/c:/Users/shukl/Desktop/INT222/nodeclass/Modules.js';

// Get the directory name of the file
const directoryName = path.dirname(filePath);
console.log('Directory Name:', directoryName);

// Get the file extension
const fileExtension = path.extname(filePath);
console.log('File Extension:', fileExtension);

// Join multiple path segments
const joinedPath = path.join('/c:', 'Users', 'shukl', 'Desktop', 'INT222', 'nodeclass', 'Modules.js');
console.log('Joined Path:', joinedPath);

// Resolve a path
const resolvedPath = path.resolve('Modules.js');
console.log('Resolved Path:', resolvedPath);

// Get the base name of the file
const fileName = path.basename(filePath);
console.log('File Name:', fileName);

// Use delimiter
const delimiter = path.delimiter;
console.log('Path Delimiter:', delimiter);

// Normalize a path
const normalizedPath = path.normalize(filePath);
console.log('Normalized Path:', normalizedPath);

// Use toNamespacedPath
const namespacedPath = path.toNamespacedPath(filePath);
console.log('Namespaced Path:', namespacedPath);


