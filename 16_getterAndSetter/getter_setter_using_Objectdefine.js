// creating getters and setters for properties of a function using Object.defineProperty() method

function user(name,email)
{
    this._name=name;
    this._email=email;

    Object.defineProperty(this,'name',
        {
            get: function()
            {
                return this._name;
            },
            set:function(value)
            {
                this._name=value;
            }
        })
        Object.defineProperty(this,'email',
            {
                get: function()
                {
                    return this._email;
                },
                set:function(value)
                {
                    this._email=value;
                }
            })
}

const user1=new user("Swapnil","sd@gmail.com");
user1.name="Pratik"; // Overrides the original value set by function constructor
console.log(user1.name);
console.log(user1.email);
