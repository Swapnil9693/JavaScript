// //(1).getElementById() Method
// let i=document.getElementById('id-para');
// i.style.backgroundColor="red"; // sets the color of paragraph to blue;
// console.log(i); // returns element values

// //(2).getElementByClassName() Method
// let b=document.getElementsByClassName("heading");

// for(let a=0;a<b.length;a++)
// {
//     b[a].style.backgroundColor="red";
// }

// //(3).querySelector() Method
// document.querySelector('.class-para').style.backgroundColor="lightblue"; // using class name
// document.querySelector('h1').style.backgroundColor="orange"; // using tag name
// document.querySelector('#id-para').style.backgroundColor="palegreen"; // using id name

//(4) document.querySelector().attribute
let a1=document.querySelector('.class-para').getAttribute('id');
console.log(a1); // output: id-para

//(5) document.querySelector('').className
let a2=document.querySelector('#id-para').className;
console.log(a2);


//(6) document.querySelector('').setAttribute('','')
let a3=document.querySelector('#id-para');
a3.setAttribute('class','new-class-para');
console.log(a3.getAttribute('class'));

//(7) document.querySelector('.className').innerHTML="value";
document.querySelector('.heading').innerHTML="Pratik Dahiphale";




