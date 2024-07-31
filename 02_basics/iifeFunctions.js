//(1) Named Imeddiately Invoked Function Expression

(function funOne(a,b)
{
    console.log(a+b);
})(6,9);

//(2) Nameless Imeddiately Invoked Function Expression

((a,b)=>{
    console.log(a+b);
})
(7,4);