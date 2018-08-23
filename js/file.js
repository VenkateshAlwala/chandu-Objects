// creation of object literal method
var literal = {name:"venkatesh",lastName: "Alwala", age : 24};

console.log(literal.name);

// cration of object instance method
var instance = new Object();
instance.name = "venkatesh";
instance.lastName = "Alwala";
instance.age = 24;

document.write(instance.name +""+ instance.lastName);

// creation of object constructor method
// Blue print method
function constructor(name,lastName,age) {
	this.name = name;
	this.lastName = lastName;
	this.age = age;
}

a = new constructor("venkatesh","Alwala",24);
b = new constructor("chandu","polimera",23);

document.write(a.name+""+a.lastName+""+a.age);
document.write(b.name+""+b.lastName+""+b.age);


// Get method
var person ={
	name:"venkatesh",
	lastName:"Alwala",
	age:24,
	get c(){
		return this.age;
	}
};

document.getElementById("demo").innerHTML = person.c;


// Set method
var person1 = {
	name:"chandu",
	lastName:"polimera",
	age:"",
	set d(value){
       this.age = value;
	}
};
person1.d = 23;

document.getElementById("demo1").innerHTML = person.age;

// prototype method
function person3(first,last,age) {
   this.firstName = first;
   this.lastName = last;
   this.age = age;

};

person3.prototype.netionality = "english";

var x = new person3("Guru","murthy",52);
console.log(x.netionality);