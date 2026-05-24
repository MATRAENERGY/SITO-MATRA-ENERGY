const Jimp = require('jimp');
const path = require('path');

const input  = path.join(__dirname, 'assets', 'mascotte per preventivi.png');
const output = path.join(__dirname, 'assets', 'mascotte per preventivi.png');

Jimp.read(input).then(img => {
  img.scan(0, 0, img.bitmap.width, img.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    // rimuovi bianco e quasi-bianco (soglia 240)
    if (r > 240 && g > 240 && b > 240) {
      this.bitmap.data[idx + 3] = 0;
    }
  });
  return img.writeAsync(output);
}).then(() => {
  console.log('Sfondo rimosso con successo.');
}).catch(err => {
  console.error('Errore:', err.message);
});
