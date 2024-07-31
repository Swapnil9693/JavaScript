const funOne=(arg1,arg2)=>
    {
     let sum=arg1+arg2;
     return sum;
    }
   console.log( funOne(5,3));

   //(2) one line body arrow function
   const funTwo=(arg1,arg2)=>(arg1+arg2);
funTwo();

// console.log(
//     funTwo(4,5));

//(3) one line object body arrow function

const funThree=()=>({name:"Swapnil",age:24});
console.log(funThree().name);
console.log(funThree());