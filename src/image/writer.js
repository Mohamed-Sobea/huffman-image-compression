// src/image/writer.js
const Jimp = require("jimp");

async function writeGrayImage(pixels, width, height, outPath) {
  const image = new Jimp(width, height);
  let i = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const gray = pixels[i++];
      const color = Jimp.rgbaToInt(gray, gray, gray, 255);
      image.setPixelColor(color, x, y);
    }
  }

  await image.writeAsync(outPath);
}

module.exports = { writeGrayImage };
