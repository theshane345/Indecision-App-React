class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi i am '+this.name+'!';
        return `Hi. i am ${this.name}`; //template strings use this over line above
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}


class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    getMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.getMajor()){
            description += ` My degree is ${this.major}. `
        }
        return description;
    }

}

class Traveller extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();

        if(this.getLocation()){
            greeting+=` My home location is ${this.homeLocation}. `
        }
        return greeting
    }
}

const stu = new Student('Shane O Riordan',45, 'Business Information Systems');
const me = new Traveller('Shane O Riordan',45, 'London');
console.log(me.getGreeting())

const nOther = new Traveller();
const other = new Student()
console.log(nOther.getGreeting())