const fs = require('fs');
const zlib = require('zlib');

// Step 1: Create a file with name lpu.txt
fs.writeFile('lpu.txt', 'Hello, this is a sample text.', (err) => {
  if (err) throw err;

  console.log('File created successfully.');

  // Step 2: Read the file and convert it to JSON
  fs.readFile('lpu.txt', 'utf8', (err, data) => {
    if (err) throw err;

    const jsonData = { text: data };

    // Step 3: Convert to JSON
    const jsonString = JSON.stringify(jsonData);

    // Step 4: Read JSON
    const parsedData = JSON.parse(jsonString);
    console.log('Read JSON:', parsedData);

    // Step 5: Write JSON to a file
    fs.writeFile('lpu.json', jsonString, (err) => {
      if (err) throw err;

      console.log('JSON file created successfully.');

      // Step 5 (continued): Open, Close, Rename, Copy
      const readStream = fs.createReadStream('lpu.json');
      const writeStream = fs.createWriteStream('lpu-copy.json');

      readStream.pipe(writeStream);

      writeStream.on('finish', () => {
        console.log('File copied successfully.');

        // Renaming the file
        fs.rename('lpu-copy.json', 'lpu-renamed.json', (err) => {
          if (err) throw err;

          console.log('File renamed successfully.');

          // Step 6: Compress using Brotli compression
          const brotliStream = zlib.createBrotliCompress();
          const input = fs.createReadStream('lpu-renamed.json');
          const output = fs.createWriteStream('lpu-compressed.br');

          input.pipe(brotliStream).pipe(output);

          output.on('finish', () => {
            console.log('File compressed successfully.');

            // Step 8: Decompress
            const decompressStream = zlib.createBrotliDecompress();
            const compressedInput = fs.createReadStream('lpu-compressed.br');
            const decompressedOutput = fs.createWriteStream('lpu-decompressed.json');

            compressedInput.pipe(decompressStream).pipe(decompressedOutput);

            decompressedOutput.on('finish', () => {
              console.log('File decompressed successfully.');
            });
          });
        });
      });
    });
  });
});