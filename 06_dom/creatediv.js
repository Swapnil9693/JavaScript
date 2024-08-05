const div=document.createElement('div');
div.setAttribute('class','div1');
div.setAttribute('id','divid');
div.innerText="creating div 1";
div.style.backgroundColor="lightblue";
window.document.body.append(div);

const unorderedList=document.createElement('ul');
unorderedList.setAttribute("class","ulist");
unorderedList.setAttribute("id","ulId");
unorderedList.innerText="list items";
unorderedList.style.backgroundColor="palegreen";
div.append(unorderedList);