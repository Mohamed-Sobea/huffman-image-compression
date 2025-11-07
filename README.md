# Huffman Image Compression

A simple Node.js project that demonstrates lossless image compression using the Huffman Coding algorithm on grayscale images.

---

## Overview

This project reads a grayscale image, compresses it using Huffman coding (a popular lossless data compression algorithm), and then decompresses it to verify correctness.

The goal is to show how data compression reduces file size without any loss in image quality.

---

## What is Huffman Coding?

Huffman Coding is a **lossless data compression algorithm** developed by David A. Huffman in 1952.  
It works by assigning **shorter binary codes** to more frequent pixel values and **longer codes** to less frequent ones.  
This approach minimizes the total number of bits needed to represent data, achieving efficient compression while preserving all original information.

## Features

- Reads grayscale image pixels.  
- Builds a Huffman tree based on pixel frequency.  
- Compresses and encodes the image.  
- Decompresses it back to the original.  
- Calculates compression ratio.  

---

## Project Structure

Huffman-Image-Compression/
│
├── data/
│ ├── input.png # Original grayscale image
│ ├── decompressed.png # Output after decompression
│
├── src/
│ ├── compressor/
│ │ └── huffman.js # Huffman algorithm implementation
│ ├── image/
│ │ ├── reader.js # Reads grayscale images
│ │ └── writer.js # Writes grayscale image
│ └── index.js 
│
├── package.json
├── package-lock.json
└── .gitignore


## Example output:
<img width="675" height="219" alt="image" src="https://github.com/user-attachments/assets/5887a237-4941-4c81-bc12-13b245efcda9" />
