//(1) for of loop on array
const array1=["swapnil","pratik","sandhya","premala","vasant"];
for(const item of array1)
{
  //  console.log(item);
    
}

//(2) for of loop on String
const String1="My name is swapnil dahiphale";
for(const char of String1)
{
  //  console.log(char);
    
}

//(3) for of loop on map
const map= new Map();
map.set('one','1');
map.set('two','2');
map.set('three','3');
map.set('four','4');
for(const [key,value] of map)
{
    console.log(`${key} : ${value}`);
    
}
