const obj1 = {
  name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        console.log("I live in " + this.city + ".");
        }
};
const obj2 = {

    name: "Jane",
    age: 25,
    city: "Los Angeles",
    greet: function() {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
        console.log("I live in " + this.city + ".");
        }
};


obj1.greet(); 
obj2.greet();



obj1.name = "Mike";
obj1.age = 35;
obj1["city"] = "Chicago";

obj1.greet();
obj2.greet();