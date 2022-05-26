const path = require("path");
const fs = require("fs");

const FILE_NAME = "text.txt";
const CHARSET = "utf-8";

const filePath = path.join(__dirname, FILE_NAME);
const input = fs.createReadStream(filePath, CHARSET);
const output = process.stdout;
input.pipe(output);
