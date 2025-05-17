//complete this code
class Person {
	constructor(name,age){
		this.pername=name;
		this.perage=age;
	}
	get name(){
		return this.pername;
	}
	set age(age){
		this.perage=age;
	}
}

class Student extends Person {
    constructor(name,age){
        super(name,age);
    }
	study(){
		return `${this.pername} is studying`;
	}
}

class Teacher extends Person {
      constructor(name,age){
        super(name,age);
    }
	teach(){
		return `${this.pername} is teaching`;
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
