"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawingMode = exports.defaultTriangleOptions = exports.defaultRectOptions = exports.defaultLineOptions = exports.defaultEllipseOptions = void 0;
const drawingMode = {
  RECTANGLE: 'RECTANGLE',
  ELLIPSE: 'ELLIPSE',
  TRIANGLE: 'TRIANGLE',
  LINE: 'LINE',
  ERASER: 'ERASER'
};
exports.drawingMode = drawingMode;
const defaultRectOptions = {
  strokeWidth: 2,
  stroke: 'black',
  fill: 'transparent',
  strokeUniform: true,
  noScaleCache: false,
  objectCaching: false
};
exports.defaultRectOptions = defaultRectOptions;
const defaultEllipseOptions = {
  strokeWidth: 2,
  stroke: 'black',
  fill: 'black',
  strokeUniform: true,
  noScaleCache: false
};
exports.defaultEllipseOptions = defaultEllipseOptions;
const defaultTriangleOptions = {
  strokeWidth: 2,
  stroke: 'black',
  fill: 'black',
  strokeUniform: true,
  noScaleCache: false
};
exports.defaultTriangleOptions = defaultTriangleOptions;
const defaultLineOptions = {
  strokeWidth: 2,
  stroke: 'black',
  fill: 'black',
  strokeUniform: true,
  noScaleCache: false
};
exports.defaultLineOptions = defaultLineOptions;