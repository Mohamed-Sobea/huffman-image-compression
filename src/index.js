// src/index.js
const { readGrayImage } = require("./image/reader");
const { writeGrayImage } = require("./image/writer");
const { buildHuffmanTree, generateCodes, encode, decode } = require("./compressor/huffman");

(async () => {
  console.log("Reading input image...");
  const { pixels, width, height } = await readGrayImage("../data/input.png");


  console.log("Building Huffman tree and generating codes...");
  const root = buildHuffmanTree(pixels);
  const codes = generateCodes(root);

  console.log("Compressing image...");
  const encoded = encode(pixels, codes);
  console.log(`Original size: ${(pixels.length * 8).toLocaleString()} bits`);
  console.log(`Compressed size: ${encoded.length.toLocaleString()} bits`);
  console.log(`Compression ratio: ${(encoded.length / (pixels.length * 8) * 100).toFixed(2)}% of original size`);

  console.log("Decompressing image...");
  const decoded = decode(encoded, root);

  console.log("Writing decompressed image to: data/decompressed.png");
  await writeGrayImage(decoded, width, height, "data/decompressed.png");

  console.log("✅ Done!");
})();
