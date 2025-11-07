// src/image/reader.js
const Jimp = require("jimp");

async function readGrayImage(path) {
  const image = await Jimp.read(path);
  image.grayscale();
  const { width, height } = image.bitmap;
  const pixels = [];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const color = Jimp.intToRGBA(image.getPixelColor(x, y));
      pixels.push(color.r); // grayscale value
    }
  }

  return { pixels, width, height };
}

module.exports = { readGrayImage };
