//(1).getElementById() Method
let i=document.getElementById('id-para');
i.style.backgroundColor="red"; // sets the color of paragraph to blue;
console.log(i); // returns element values

//(2).getElementByClassName() Method
let b=document.getElementsByClassName("heading");

for(let a=0;a<b.length;a++)
{
    b[a].style.backgroundColor="red";
}

//(3).querySelector() Method
document.querySelector('.class-para').style.backgroundColor="lightblue"; // using class name
document.querySelector('h1').style.backgroundColor="orange"; // using tag name
document.querySelector('#id-para').style.backgroundColor="palegreen"; // using id name



