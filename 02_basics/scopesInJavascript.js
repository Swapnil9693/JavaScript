//(1) Function scope or Block scope or Local scope
function one()
{  let a=10
    const two= function()
    {  let b=15;
       console.log(a);
    }
    //console.log(b);  we cant access b outside two()
    two();
}
one();
//-----------------------------------------------------------

//(2) Global scope
let c=25;
function three()
{
    console.log(c);
}
three();