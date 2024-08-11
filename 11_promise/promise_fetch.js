// promise using fetch,then and catch
fetch('https://api.github.com/users/Swapnil9693')
.then(response=> response.json())
.then((data)=>
{
    console.log(data);
    
})
.catch(error=> console.log(error));
