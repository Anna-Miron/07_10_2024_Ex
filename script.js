/**
 * Calcularea Sumelor:
 * Definește o funcție numită computeSum care 
 * primește doi parametri și returnează suma acestora.
 */
function computeSum(a, b){
    return a + b;
}

console.log(computeSum(20, 15));

/**
 * Determinarea Parității:
 * Scrie o funcție numită isEven care primește un număr 
 * și returnează true dacă numărul este par și false dacă este impar
 */

function isEven(checkedNmber) {
    let isOdd = true;
    if (checkedNmber %2 === 0) {// structure contionala if
    isOdd = false;    
    }
    return !isOdd;
}
console.log(isEven(12));
console.log(isEven(3));


/**
 * Concatenarea Șirurilor:
 * Creează o funcție numită concatenateStrings care primește 
 * două șiruri și le concatenează, returnând rezultatul.
 */

function concatenateString(string1, string2) {
    return string1 + string2;

}
const result = concatenateString("Alabala", "Portocala");
console.log(result);

/**
 * Verificarea Palindromului:
 * Defineste o funcție numită isPalindrome care primește un șir și
 *  returnează true dacă este palindrom și false în caz contrar.
 */

// cea mai simpla metoda string reverse

function isPalindrome(text) {
    let reverseText = "";
    for(const letter of text) { //iteratie
        reverseText = letter + reverseText;
    }
    return text === reverseText;
}
console.log(isPalindrome("aba"));
console.log(isPalindrome("abca"));


/**
 * Generarea unui Număr Aleatoriu:
 * Scrie o funcție numită generateRandomNumber care 
 * returnează un număr aleatoriu întreg între 1 și 100.
 */

function generateRandomNumber() {
    let x = Math.floor((Math.random() * 100) + 1);
    return x;
}
console.log(generateRandomNumber());

/**
 * Calcularea Puterii:
 * Implementează o funcție numită raiseToPower care primește 
 * două numere (baza și exponentul) și returnează rezultatul ridicării la putere.
 */
// Implementarea funcției pentru ridicarea la putere
function raiseToPower(base, exponent) {
    return Math.pow(base, exponent);
}

// Exemplu de apel al funcției
const raised = raiseToPower(2, 3);
console.log(raised); // Va afișa 8

/**
 * Calcularea Mediei:
 * Creează o funcție numită calculateAverage care primește 
 * un array de numere și returnează media lor.
 */
// Implementarea funcției pentru calcularea mediei
function calculateAverage(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
}
// Exemplu de apel al funcției
const numbersArray = [10, 15, 20, 25, 30];
const average = calculateAverage(numbersArray);
console.log(average); // Va afișa 20


/**
 * Transformarea în Majusculă:
 * Definește o funcție numită transformToUppercase 
 * care primește un șir și returnează șirul cu toate 
 * literele transformate în majusculă.
 */
// Implementation of the function for transforming to uppercase
function transformToUppercase(inputString) {
    return inputString.toUpperCase();
}

// Example function call
const originalString = "Hello, World!";
const transformedString = transformToUppercase(originalString);
console.log(transformedString); // Will display "HELLO, WORLD!"

/**
 * Verificarea Numărului Prim:
 * Scrie o funcție numită isPrimeNumber care primește un număr 
 * și returnează true dacă este prim și false în caz contrar.
 */
// Implementation of the function for checking prime numbers
function isPrimeNumber(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}
  
// Example function calls
const prime = isPrimeNumber(7);
console.log(prime); // Will display true

const notPrime = isPrimeNumber(14);
console.log(notPrime); // Will display false

