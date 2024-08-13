const user={
    name:"Swapnil",
    age:24
}

const employee={
    name:"Arshit",
    position:"clerk"
}

const bank={
    bankName:"Axis Bank"
}
//(1) modern syntax for setting prototype in Object using Object.setPrototype
Object.setPrototypeOf(bank,employee); // Bank inheriting properties of employee

console.log(bank.name);

//(2)Old Syntax for setting prototype using __proto__
bank.__proto__=user;
console.log(bank.name);


