const requestUrl='https://api.github.com/users/Swapnil9693';
const xhr=new XMLHttpRequest();
xhr.onreadystatechange=function ()
{  
    if(xhr.readyState==4)
    {
        const response=JSON.parse(this.responseText);
        console.log(response.name);
        console.log(response.followers);
        console.log(response.bio);
        
    }
    
};
xhr.open('GET',requestUrl);

xhr.send();