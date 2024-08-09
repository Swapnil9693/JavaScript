const calculate=document.querySelector('#cal-button');
document.querySelector('#result-para3').innerText=" between 16-18.5 = Very Thin!\n between 18.5-25 = Normal! \n between 25-40 = Overweight!";
calculate.addEventListener('click',function(e)
{
  const inputWeight=document.querySelector('#weight-input').value;
  const weight=parseFloat(inputWeight);
  const inputHeight=document.querySelector('#height-input').value;
  const height=parseFloat(inputHeight);
  const sqInput=height*height;
  console.log(sqInput);
  
  const result=weight/sqInput;
  const resultNum=new Number(result);
  
  e.preventDefault();


document.querySelector('#result-para').innerText=resultNum.toPrecision(4);

if(resultNum<18.50)
{
  document.querySelector('#result-para2').innerText= "Severe Thinness";
}
else if(resultNum>18.5 && resultNum<=25.00)
{
  document.querySelector('#result-para2').innerText="Normal";
}
else if(resultNum>25.00 && resultNum<=40)
{
  document.querySelector('#result-para2').innerText="Overweight!!!";
}

})
