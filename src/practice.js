const canPaint = function(painter) {
  const obj = {
    paint: function(color) {
      return `${painter} paints ${color}`
    }
  }
  return obj;
}

const canThrow = function(robot) {
  const obj = {
      throw: function(distance, speed) {
        return `${robot} throws the spear ${distance} nanometers at ${speed} nanometers/hour`
      }
  }
  return obj;
}

function somethingDopeDude (robot) {
  return function(speed) {
    return function(distance) {
      return `${robot} throws spear at ${speed} mph, and ${distance}.`;
    }
  }
}

const canThrow1 = function(robot) {
  const obj = {
      distance: function(distance) {
      },
      speed: function(speed) {
        return `${robot} throws the spear ${distance} nanometers at ${speed} nanometers/hour`
      }
    }
  return obj;
}
