// const { createGzip } = require('zlib');
// const { pipeline } = require('stream');
// const {
//   createReadStream,
//   createWriteStream
// } = require('fs');

// const gzip = createGzip();
// const source = createReadStream('input.txt');
// const destination = createWriteStream('input.txt.gz');

// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.error('An error occurred:', err);
//     process.exitCode = 1;
//   }
//   console.log("pipleline")
// });

const fs=require('fs')
const { gzip } = require('zlib');

const input = fs.createReadStream('input.txt')
const write =fs.createWriteStream('input.txt.gz')

input.pipe(gzip)//.pipe(write)
