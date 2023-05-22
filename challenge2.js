/*************************************************
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 * **********************************************
 */
function greet(name) {
  // Your code here
  console.log("Hello", name);
}

greet("Hamza");

/* ***********************************************
/** Task 2
 * ***********************************************
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  // Your code here
  {
    return Boolean(n % 2 != 0);
  }
}

//console.log(isOdd(7));
console.log(isOdd(10));

/* * ***********************************************
/** Task 3
/* * ***********************************************
/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
//const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15];
//const result = numbers.filter(oddsSmallerThan);

function oddsSmallerThan(n) {
  // Your code here
  if (isOdd(n)) {
    return n;
  }
}
//console.log(oddsSmallerThan(7));
console.log(oddsSmallerThan(15));

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  if (isOdd == true) {
    return n * n;
  } else {
    return n + n;
  }
}
console.log(squareOrDouble(11));
console.log(squareOrDouble(9));
console.log(squareOrDouble(16));
