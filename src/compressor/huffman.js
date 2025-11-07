// src/compressor/huffman.js

class Node {
  constructor(value, freq, left = null, right = null) {
    this.value = value;
    this.freq = freq;
    this.left = left;
    this.right = right;
  }
}

function buildFrequencyMap(data) {
  const freqMap = new Map();
  for (const val of data) {
    freqMap.set(val, (freqMap.get(val) || 0) + 1);
  }
  return freqMap;
}

function buildHuffmanTree(data) {
  const freqMap = buildFrequencyMap(data);
  const nodes = [...freqMap.entries()].map(([value, freq]) => new Node(value, freq));

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.freq - b.freq);
    const left = nodes.shift();
    const right = nodes.shift();
    nodes.push(new Node(null, left.freq + right.freq, left, right));
  }

  return nodes[0];
}

function generateCodes(node, prefix = "", codeMap = {}) {
  if (!node.left && !node.right) {
    codeMap[node.value] = prefix || "0"; // handles single-node tree
  } else {
    generateCodes(node.left, prefix + "0", codeMap);
    generateCodes(node.right, prefix + "1", codeMap);
  }
  return codeMap;
}

function encode(data, codeMap) {
  return data.map(val => codeMap[val]).join("");
}

function decode(encodedBits, root) {
  const decoded = [];
  let current = root;

  for (const bit of encodedBits) {
    current = bit === "0" ? current.left : current.right;
    if (!current.left && !current.right) {
      decoded.push(current.value);
      current = root;
    }
  }

  return decoded;
}

module.exports = {
  Node,
  buildFrequencyMap,
  buildHuffmanTree,
  generateCodes,
  encode,
  decode
};
