console.log ("Hello from JavaScript")
var myName = "Naum"
/* DECLARING VARIABLES
Var-> is used throughout the program
Let-> is used within the scope its declard
Cont-> is used with variables that do not change */

 
 var myName = "Naum"

 let ourNme = RiaraUniversity

 const pi = 3.142


 //assigning variables
 var a ; // declaring varible a
 var b = 2; // declaring variable b and assigning 2 to it.

 console.log(a) // the cosole will show null because a has not been asigned a value yet.

 a = 7; 

 b = a;

 console.log(a) // the cosole will show 7 which the the number assigned to variable a

 // initializing a variable to an initial value at the same time it is declared

 var a = 9;
 // var a is declaring it and =9 is declaring it.


 // uninitialized variables 

 //INITIALIZE THESE VARIABLES
 var a;
  var b;
  var c;

  var a = 1;
  var b = 5;
  var c = "I am ";

  var a = a + 3; // will be 1+3
  var b = b + 10; // will be 5+10
  var c = c + "string"; // will be i am+ string.
  
  

  //CASE SENSITIVE 
  
  var StudentName;
  studentname = "Naum";
  // the code above will show reference error since studentname has not been defined.


  // ADDING NUMBERS 
  var sum = 5 + 10;
  console.log(sum)  
  // 15 will be displayed in the cosole


  //SUBTRACTING NUMBERS
var difference = 40-5; // the difference variable = 35


// MULTIPLICATION
var product = 2 * 10;
// product variable = 20


// DIVISION
var quotient = 60/2;
// quotient = 30

// INCREMENTING NUMBERS 
var myVar = 80;


myVar = myVar + 1;
//or
myVar ++; 
//inrements 80 to 81 

// decrementing
var myvar = 10;
myVar --;

// DECIMAL NUMBERS
var myDecimal = 4.5;


// MULTIPLY DECIMALS
//Similar to integer multiplication.

// REMAINDER
var remainder = 10 % 3;


//DECLARE STRING VARIABLES

var firstName = "Naum";
var lastName = "Jepkemboi";

// ESCAPING LITERAL QUOTES IN STRINGS
// quotes within the string
var myStr = "I like playing \"football\" soccer";
cosole.log(myStr)
// the console with show the string without the slash and without igoning the quotations inside the main quotation.

// QUOTING STRINGS WITH SINGLE QUOTES
// Use single quotes as the main quotation to escape the slash
var myStr = 'I like playing \"football\" soccer';


//ESCAPING SEQUENCES IN STRINGS

/*
 CODE   OUTPUT
 \'      single quote
\"       double quote
\\       backslash
\n       newline
\r       carriage return
\t       tab
\b       backspace
\f       form feed 
*/


//example
var myStr = "FirstLine\n \t\\SecondLine\nThirdLine"

// CONCATENATING STRINGS WITH PLUS OPERATOR
// joining character strings end-to-end.

var myStr = "My name is Naum." + "I am a student."; 
console.log(myStr)
// My name is Naum. I am a student.

//use of += to concatenate
var ourStr = "My name is Naum. ";
ourStr +="I am a student."


//CONCATENATE STRINGS WITH VARIABLES
var myName = "NaumLagat";
var ourStr = "Hello, my name is " + myName + ", how are you doing? ";
console.log(myStr)
// console log outputs: Hello, my name is NaumLagat how are you doing?


//APPENDING VARIABLES TO STRINGS
var anAdjective = "Wonderful!";
var myStr = "My name is ";
myStr += anAdjective;
// console log will output my name is Wonderful!
