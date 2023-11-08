
// class Plant {
//   constructor() {
//     this.water = 0;
//     this.soil = 0;
//     this.light = 0;
//   }


//   feed() {
//     this.soil++
//   }

//   giveLight() {
//     this.light++
//   }
// }

// const hydrate = (plant) => {
//   return {
//     ...plant, //creates a soft copy of the plant that is passed into this method
//     water: (plant.water || 0) + 1 //targets the water property and increases it by 1. OR if the property doesnt exist it creates it and sets it to zero 
//   }
// };

export const changeState = (prop) => { //function is curried... was originally const changeState = (state, prop, value) => ({
  return (value) => {
    return (state) => ({
      ...state, //like plant, animal, or anything that has data that we want to change. create a soft copy of the state (object holding data)
      [prop]: (state[prop] || 0) + value  //property (like water, soil), of the state's property value (plant.water is the same as plant[water], is increased by the value we have entered. If the property does not exist we create it and set its initial value at zero.)
    })
  }
}

//applications of changeState 
export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

export const superWater = changeState("water")(5);

export const blueFood = changeState("soil")(5)      
export const greenFood = changeState("soil")(10)
export const yuckyFood = changeState("soil")(-5)

//blueFood(state) //enter the state to know what data/where the data is that we are updating

//non curried version of making functions
//export const feedPlant = changeState("soil", 5, plant")
//export const feedMushroom = changeState("soil, 5, fungus")


export const storeState = () => { //function with no parameters
  let currentState = {}; //initiate an empty object to hold our data
    return (stateChangeFunction = state => state) => {    //inner function that takes in a function that will change the state of our application, meaning it will change the data held in our application. If no function is passed as an argument, then we call state "state"
      const newState = stateChangeFunction(currentState);
      currentState = {...newState};
      return newState;
    }
  }

export const stateControl = storeState();

export const fedPlant = stateControl(blueFood)
export const hungryPlant = stateControl(yuckyFood)

//what does this do!
//fedPlant calls on stateControl which invokes storeState(), and passes in blueFood as the argument for the stateChangeFunction parameter in the anon func.
    //return (blueFood) in place of return (stateChangeFunction)

//anon function creates a variable "newState" which is calling the blueFood method, passing in the currentState object as the state
    //When we call on blueFood we pass in the state. blueFood(state)
    //const newState = blueFood(currentState)
    //blueFood updates the currentState object by increasing soil by 5. This is stored as the  newState variable
    //once this is done, we update current state outside of this function by making it a copy of the newState variable