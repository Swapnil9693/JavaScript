//(1) passing an object as an argument
obj1={
    company:"SUZUKI",
    model:"BREZZA",
    price:1200000
};

function carDetails(anyobject)
{
  console.log(`The name of company is ${anyobject.company} and the model and price is ${anyobject.model} & ${anyobject.price} respectively `);
}

carDetails(obj1);

//(2) passing an array as argument

const array1=[100,200,300,400];

function arrayValues(anyArray)
{
    console.log(anyArray[0]);
    console.log(anyArray[1]);
    console.log(anyArray[2]);
}

arrayValues(array1);