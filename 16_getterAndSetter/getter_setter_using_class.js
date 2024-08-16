
class Employee {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email()
  {
    return this._email;
  }
  set email(value)
  {
    this._email=value;
  }
  get password()
  {
    return this._password;
  }
  set password(value)
  {
   this._password=value;
  }
}

const emp1 = new Employee("Swapnil", "sd@Gmail.com", "12345");

console.log(emp1.name);  // output: Swapnil
console.log(emp1.email); // output:sd@gmail.com
console.log(emp1.password);// output : 12345

