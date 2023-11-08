const canPaint = function (painter) 
  const obj = {
    paint: function (color) {
      return `${painter} paints ${color}`
    }
  }
  return obj;
}

const canThrow = function (robot) {
  const obj = {
    throw: function (distance, speed) {
      return `${robot} throws the spear ${distance} nanometers at ${speed} nanometers/hour`
    }
  }
  return obj;
}

function somethingDopeDude(robot) {
  return function (speed) {
    return function (distance) {
      return `${robot} throws spear at ${speed} mph, and ${distance}.`;
    }
  }
}

const canThrow1 = function (robot) {
  const obj = {
    distance: function (distance) {
      return {
        speed: function (speed) {
          return `${robot} throws the spear ${distance} nanometers at ${speed} nanometers/hour`
        }
      }
    }
  }
  return obj;
}

const throwSpear = (robot) => {
  const obj = {
    distance: (distance) => {
      return {
        speed: (speed) => {
          return `${robot} throws the spear ${distance} yards at ${speed} miles per hour`;
        }
      };
    }
  };
  return obj;
};


const battleRobot1 = "Battle Robot 1";
const throwAction = throwSpear(battleRobot1);
const result = throwAction.distance(100).speed(200);

console.log(result);
// "Battle Robot 1 throws the spear 100 yards at 200 miles per hour"



// const canThrow2 = function(robot) {
//   const obj = {
//       distance: function(distance) {
//         return {
//       speed: function(speed) {
//         return `${robot} throws the spear at ${speed} nanometers/hour and${distance}`
//       }
//     }
//   return obj;
// }

const recursoReverso = (word) => {
  if (word === "") {
    return "";
  } else {
    return recursoReverso(word.substring(1) + word[0]);
  }
}


function sum(a,b) {
  return  a + b;
}

const sum = (a, b) => {
  return a + b;
}

const sum = (a, b) => a + b;

//for arrow notation, we create a variable that is the name of our gunction
//then we set it equal to the parameters of the function
//the arrow points toward the products, or what is returned.
//implicit return means we do not have to state the word return at the end


const isPositive = (number) => {
  number >=0;
}

const isPositive2 = (number) => number >= 0;

const isPositive3 = number => number >= 0;
                //if we only have one argument we can get rid of the ()

let randoNum = () => Math.random

document.addEventListener('click', function() {
  console.log('click')
});

document.addEventListener('click',() => {
  console.log('click')
})

//anon function is just shown as an open paren

document.addEventListener('click',() => console.log('click'))