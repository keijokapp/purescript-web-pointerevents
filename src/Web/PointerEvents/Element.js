

export function setPointerCapture(pointerId) {
  return function (element) {
    return function () {
      return element.setPointerCapture(pointerId);
    };
  };
}

export function releasePointerCapture(pointerId) {
  return function (element) {
    return function () {
      return element.releasePointerCapture(pointerId);
    };
  };
}

export function hasPointerCapture(pointerId) {
  return function (element) {
    return function () {
      return element.hasPointerCapture(pointerId);
    };
  };
}
