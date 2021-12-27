const fs = require('fs');

let imgReadBuffer = fs.readFileSync('./test-pattern.jpg');

let imgHexEncoded = new Buffer(imgReadBuffer).toString('hex');

let imgHexDecoded = new Buffer(imgHexEncoded, 'hex');

fs.writeFileSync('decodeHexImage.png', imgHexDecoded)