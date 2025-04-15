const obj1 = {
  name: "John",
  age: 30,
  city: "New York",
};

const obj2 = {
  name: "John",
  age: 30,
  city: "New York",
};

const boolean = JSON.stringify(obj1) === JSON.stringify(obj2);
console.log(boolean);

let isMatched = false;

for (const key in obj1) {
  if (obj1[key] !== obj2[key]) {
    isMatched = false;
    break;
  } 
  else {
    isMatched = true;
  }
}

isMatched ? console.log("Objects are equal") : console.log("Objects are not equal");
