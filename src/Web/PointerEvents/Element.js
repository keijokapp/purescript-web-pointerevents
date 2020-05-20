"use strict";

exports.setPointerCapture = function (element) {
  return function (pointerId) {
    return function () {
      return element.setPointerCapture(pointerId);
    };
  };
};

exports.releasePointerCapture = function (element) {
  return function (pointerId) {
    return function () {
      return element.releasePointerCapture(pointerId);
    };
  };
};

exports.hasPointerCapture = function (element) {
  return function (pointerId) {
    return function () {
      return element.hasPointerCapture(pointerId);
    };
  };
};
