

export function setPointerCapture(element) {
  return function (pointerId) {
    return function () {
      return element.setPointerCapture(pointerId);
    };
  };
}

export function releasePointerCapture(element) {
  return function (pointerId) {
    return function () {
      return element.releasePointerCapture(pointerId);
    };
  };
}

export function hasPointerCapture(element) {
  return function (pointerId) {
    return function () {
      return element.hasPointerCapture(pointerId);
    };
  };
}
