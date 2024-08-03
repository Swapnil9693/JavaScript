// nullish coalescing operator is an operator which returns its right operand  if left operand  is null or undefined
//(1)

let val1 = 5;
let val2 =val1??10; // returned 5 as left operand  is not null or undefined
console.log(val2);

//(2)

let val3=null;
let val4=val3??10;   // returned 10 as left operand  is null
console.log(val4);

