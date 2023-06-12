const JsBarcode = require('jsbarcode');
const { Canvas } = require("canvas");
const { DOMImplementation, XMLSerializer } = require('xmldom');
const { createCanvas, loadImage } = require('canvas');

// const canvas = new Canvas();
// console.log(JsBarcode(canvas, "Hello"));


const xmlSerializer = new XMLSerializer();
const document = new DOMImplementation().createDocument('http://www.w3.org/1999/xhtml', 'html', null);
const svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// JsBarcode(svgNode, 'Mera', {
//     xmlDocument: document,
// });


JsBarcode(svgNode, '1234', {
    xmlDocument: document,
    format: "pharmacode",
    lineColor: "#0aa",
    width: 4,
    height: 40,
    displayValue: true,

});

const svgText = xmlSerializer.serializeToString(svgNode);

console.log('svgText', svgText);