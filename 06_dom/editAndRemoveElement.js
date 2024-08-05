const uList1=document.createElement('ul');

function addList(languageName)
{
    const list1=document.createElement('li');
    list1.appendChild(document.createTextNode(languageName));
    uList1.appendChild(list1);
    document.body.append(uList1);
}
addList("Python");