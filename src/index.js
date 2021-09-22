let foo = 1;
foo = foo + 2;
foo += 2;
foo++;
foo--;
foo = 8;
foo = foo % 3;
let str = 'hello';
str = str + ' world' + '!';
str = str.toUpperCase();
str = str.substr(6);
let array = [
    'apple',
    'cherry',
    'pear'
];
array.push(23, Math.PI);
array.pop();
array[1] = 'apricot';

let obj = {
    name: 'kaspar',
    age: 28,
    isMale: true,
    "as ds": 'asdas'
}
let prop = 'name';

obj.eyes = 'blue';



function add(a, b){
    return a + b;
}

// let sub = function (a, b){
//     return a - b;
// }

let sub = (a, b) => {
    return a - b;
}

// let result = add(2,3);

obj = {
    array: ['a', 'b'],
    obj: {
        name: 'kaspar',
        age: 12
    },
    add(a, b) {
        return a + b;
    },
    cat:'nuustik'
}
function sayhello(){
        console.log('hello');
}
setInterval(sayhello, 5000);

array = [
    {name: 'kaspar'},
    {name: 'martin'}
];

array = [[[[[1]]]]];
console.log(array[0][0][0][0][0]);

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    whoAmI(){
        console.log('Hi I am ' + this.name + ' and I am ' + this.age + ' years old');
    } 
}

let person1 = new Person('kaspar', 28);
console.log(person1.name);
person1.whoAmI();
person1.name = 'vello';
let person2 = new Person('martin', 34);
console.log(person2.name);
person2.whoAmI();
console.log(person1.name);
person1.whoAmI();