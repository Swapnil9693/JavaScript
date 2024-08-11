//(1) promise using then() and catch()
const promiseOne= new Promise((resolve,reject)=>
    {
        setTimeout(function()
    {   const status=true;
        if(!status)
        {
            resolve("promise one resolved !");
        }
        else
        {
            reject("Error ho gaya hai");
        }
       
    },2000);
    })
    .then((message)=>
    {
    console.log(message);
    
    })
    .catch((error)=>
    {
    console.log(error);
    
    })
