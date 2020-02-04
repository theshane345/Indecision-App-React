//arguments object - no longer bound with arrow functions


const add =  (a , b) =>  {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1));


//this keyword - no longer bound

const user = {
    name: 'Shane',
    cities:['Phillie','New York','Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in '+city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    numbers:[1, 2, 3, 4],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};
console.log(multiplier.multiply());