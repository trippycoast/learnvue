for(let i=0 ; i<10 ; i++){
    console.log(i);
}
let num = 2;
while(num<1000000) {
    num*=2;
    console.log(num);
}

num = 1;

while(num>1){
    console.log('while:' + num);
}

do {
    console.log('do:' + num);
} while(num>1);

let fruits = ['apple', 'cherry', 'pear'];

fruits.forEach((fruit)=>{
    fruit = 'baaah';
    console.log('value:' + fruit);
});

let newFruits = fruits.map((fruit, key)=>{
    return fruit+key;
});
console.log(newFruits);

let nums = [1,2,3,4,5,6,7,8,9];
let sum = nums.reduce((sum, value)=>{
    return sum + value;
});

console.log(sum);

nums = [5,2,3,7,4,1,9,6,8];
nums.sort((a, b) => {
    if(a>b){
        return 1;
    }
    if(a<b){
        return -1;
    }
    return 0;
});
console.log(nums);