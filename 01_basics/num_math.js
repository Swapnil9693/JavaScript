let num1=100;
let st1=num1.toString();
console.log(st1.length);
console.log(num1.toFixed(3));
//------------------------------------------------------------------------//
let str1="1234";
let num2=new Number(str1);
console.log(num2);
console.log(num2.toString());
console.log(num2);
//-----------------------------------------------------------------------//

let val1=true;
let num4=new Number(val1);
console.log(num4);
//-----------------------------------------------------------------------//
//(1) Number methods 
let string1="13.3754";
let number1=new Number(string1);
console.log(number1);
//-------------------------------------------------------------------
// (2) toString() method
let string2=number1.toString();
console.log(string2);
//-------------------------------------------------------------------
//(3) toFixed() method
console.log(number1.toFixed(4));
//-------------------------------------------------------------------
//(4) toPrecision() method
console.log(number1.toPrecision(4));
//-------------------------------------------------------------------
//(5) toLocaleString
let anotherNum1=10000000000;
console.log(anotherNum1.toLocaleString('en-IN'));
let date1=new Date();
//-------------------------------------------------------------------
let amount1=1234567890;
let string5=date1.toLocaleString();
let string6=amount1.toLocaleString();
console.log(string6);
console.log(string5);
//-------------------------------------------------------------------
//Math.round() method 
let a=Math.round(12.3);
console.log(a);
//--------------------------------------------------------------------
let b=Math.min(4,5,6,7,8,9);
console.log(b);
//--------------------------------------------------------------------
//Math.random() method
let c=Math.random();
console.log(c);
//--------------------------------------------------------------------
let random1=Math.floor(((Math.random()*10)+1))+1;
console.log(random1);
