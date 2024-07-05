console.log(null>0);
console.log(null==0);
console.log(null>=0);// here null is treated as '0' due to the comparison operator >= which behaves diffrently than '==' operator
console.log("---------------------------------------------------------------------");
//(2) checking two diffrent datatypes using '=='
console.log("2"==2);
console.log("String"=="String");
console.log(true==1);
console.log("---------------------------------------------------------------------");

//(3) Strict checking variables of diffrent datatypes using '==='
console.log("2"===2);
console.log("swapnil"==="swapnil");
// here datatype of both LHS and RHS has to be the same ,then only it returns 'true'
console.log("---------------------------------------------------------------------");