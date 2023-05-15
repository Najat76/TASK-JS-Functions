/*function syntax
==================
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
---------------------------------------------------------
*/
/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
//correct my task after grade:

function printName(myName) {
  console.log(myName);
}
let name = printName("najat");

/* * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birth) {
  return 2023 - birth;
}
console.log(printAge(1976));

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  if (language == "en") {
    console.log("Hello ", name);
  } else if (language == "es") {
    console.log("Hola ", name);
  } else if (language == "fr") {
    console.log("Bonjour ", name);
  } else if (language == "tr") {
    console.log("Merhaba ", name);
  }
}

// else {
//console.log("Merhaba ", name);

//let x = printHello("Najat", "en");
//let x = printHello("Najat", "es");
//let x = printHello("Najat", "fr");
let x = printHello("Najat", "tr");
