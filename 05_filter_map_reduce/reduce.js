const array1=[10,20,30,40,50];
const total=array1.reduce((accumlator,current)=>
    {
         return current+accumlator;
    },0)
    console.log(total);
    