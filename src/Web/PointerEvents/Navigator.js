"use strict";

exports.maxTouchPoints = function (navigator) {
  return function () {
    return navigator.maxTouchPoints;
  };
};
