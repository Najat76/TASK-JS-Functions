/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
/*let myName = Najat;*/
function printName()
const myName = Najat;
{
    console.log(myName);
}
prompt(`enter your Name`, myName); ls

/* * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
const birthYear = 1976;
function printAge(birthYear)
{
    age = (20023 - birthYear);
    console.log(age);
}
alert(printAge(birthYear));
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

function printHello(myName,language) {

    if (language = en) 
        alert (`Hello NAME` ,myName)
    
    else if
        (language = es) 
        alert ( `Hola NAME` ,myName);

        else if
        (language = fr)
        alert (`Bonjour NAME` , myName)

        else if
        (language = tr) 
        alert(`Merhaba NAME` , myName)
    }



/**
 * Task 4:
 * Create a function named `printMax`
* - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(num1,num2); {
//let result = Math.max(num1,num2)
result = Math.max(num1,num2);
console.log( `the bigger number is` , +result);
}


