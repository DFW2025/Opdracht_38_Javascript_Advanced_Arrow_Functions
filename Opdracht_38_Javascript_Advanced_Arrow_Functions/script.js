// Javascript


// 1. Zet de functie om naar een arrow functie Let op onderstaande is een anonymous function!!

const ikRockArrowFunctions = function () {
                                           console.log("Joe, ik rock de arrow functions!");
                                          };

 ikRockArrowFunctions()

// Arrow Function omzetting

const ikRockArrowFunctions2 = () => { console.log("Joe, ik rock de arrow functions!");};

ikRockArrowFunctions2()


// 2. Zet de functie om naar een arrow functie en omdat deze op 1 regel past verwijder de return statement/brackets  ook  ( arrow verwijst al naar dat er een return moet plaatsvinden)

const fivePlusSeven = function () { 
                                    return 5 + 7 
                                  };

fivePlusSeven();

// Arrow Function omzetting 

const fivePlusSeven = () =>  5 + 7 ;

fivePlusSeven();



// 3. Arrow Function aanmaken met 2 parameters die bij elkaar opgeteld worden


const myFunction = (a, b) => a + b ;

myFunction(4, 2);

// 4. Arrow Function aanmaken met 1 parameter die 5 erbij optelt, bij 1 parameter kun je de haakjes ook verwijderen!

const addFive = a =>  a + 5 ;

addFive(4);

// 5. Arrow Function aanmaken die een object returned.


const createObject = ()  =>  ({ greeting: "hoi" }) ;

createObject ();

