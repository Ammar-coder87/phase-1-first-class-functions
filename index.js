// Some examples
/*function Monday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Tuesday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  
  function Wednesday() {
    console.log("Go for a five-mile run");
    console.log("Go for a five-mile run");
  }
  
  function Thursday() {
    console.log("Go for a five-mile run");
    console.log("Pump iron");
  }
  
  function Friday() {
    console.log("Go for a five-mile run");
    console.log("Swim 40 laps");
  }
  //Friday();

  function runFiveMiles() {
    console.log("Go for a five-mile run");
  }

  function liftWeights() {
    console.log("Pump iron");
  }
  
  function swimFortyLaps() {
    console.log("Swim 40 laps");
  }

  function Monday() {
    runFiveMiles();
    liftWeights();
  }

  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

  function Monday() {
    exerciseRoutine(liftWeights);
  }
  
  function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }*/
/*------------------------------------------------------------------*/

  //>>> Define First-Class Functions
  //#Inline Functions:

  /*exerciseRoutine(function () {
    console.log("Stretch! Work that core!");
  });

  exerciseRoutine(() => {
    console.log("Stretch! Work that core!");
  });
  
  // Or even shorter:
  exerciseRoutine(() => console.log("Stretch! Work that core!"));*/
/*------------------------------------------------------------------*/


  //# Returning Functions:

  /*function morningRoutine(exercise) {
    let breakfast;
  
    if (exercise === liftWeights) {
      breakfast = "protein bar";
    } else if (exercise === swimFortyLaps) {
      breakfast = "kale smoothie";
    } else {
      breakfast = "granola";
    }
  
    exerciseRoutine(exercise);
  
    // we could give this function a name if we wanted to, but since
    // it's only available _inside_ morningRoutine(), we don't need to
    return function () {
      console.log(`Nom nom nom, this ${breakfast} is delicious!`);
    };
  }

  const afterExercise = morningRoutine(liftWeights);
// LOG: Go for a five-mile run
// LOG: Pump iron

afterExercise;
//=> ƒ () { console.log(`Nom nom nom, this ${breakfast} is delicious!`); }

afterExercise();*/
// LOG: Nom nom nom, this protein bar is delicious!
/*---------------------------------------------------------------------------------------------------------------------*/


function receivesAFunction(callback) {

    callback();
}
function callbackFunction() {

    console.log("hello");
};
receivesAFunction(callbackFunction);
/*---------------------------------------------------------------------------------------------------------------------*/

function returnsANamedFunction() {
    function namedFunction() {
        console.log("Here is a named function.");
    }
    return namedFunction;
};
returnsANamedFunction()();
/*---------------------------------------------------------------------------------------------------------------------*/



function returnsAnAnonymousFunction() {


    return function () {

        console.log("Ammar");


    };








}

returnsAnAnonymousFunction()();
   
  