const Lab4 = require("./Lab4");
const fs = require("fs");

const fileZapovit = fs.readFileSync("../source/Zapovit.txt");
const fileBiosfera = fs.readFileSync("../source/Biosfera.txt");
const filePerevtilennya = fs.readFileSync("../source/Perevtilennya.txt");

const fileFairyTaleCr = fs.readFileSync("../source1/fairytaleAff.txt");

const zapovit = new Lab4(fileZapovit.toString("utf-8"));
const biosfera = new Lab4(fileBiosfera.toString("utf-8"));
const perevtilennya = new Lab4(filePerevtilennya.toString("utf-8"));

const fairyTaleCr = new Lab4(fileFairyTaleCr.toString("utf-8"));

// console.log(zapovit.charsProbabilities());
// console.log(biosfera.charsProbabilities());
// console.log(perevtilennya.charsProbabilities());

// console.log(zapovit.bigramProbabilities());
// console.log(biosfera.bigramProbabilities());
// console.log(perevtilennya.bigramProbabilities());

// console.log(zapovit.trigramProbabilities());
// console.log(biosfera.trigramProbabilities());
// console.log(perevtilennya.trigramProbabilities());
