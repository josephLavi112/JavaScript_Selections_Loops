console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i<100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
    
    
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i<100; i++) {
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else 
    if (i % 3 == 0){
        console.log("FIZZ");
    }
    if(i % 5 == 0){
        console.log("BUZZ")
    }
      
}
//Exercise 3 section
console.log("EXERCISE 3:\n==========\n");
let number = 1; 
while(number <= 100) {
    if(number % 2 != 0){
    console.log(number);
    }
    number++;
}
console.log("EXERCISE 3pt2:\n==========\n")
let i = 1;
do{
if(i % 3 == 0 && i % 5 == 0){
    console.log("FIZZBUZZ");
}
else if(i % 3 == 0){
    console.log("FIZZ");
}
else if(i % 5 == 0){
    console.log("BUZZ");
}
    i++;
    
}while(i <= 100);
//Exercise 4
console.log("EXERCISE 4:\n==========\n")
let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false;

for(let i= 0; i>= n; i++){
    if(i == value){
        console.log("found value");
        found = true;
        break;
    } 

}
if(found == false){
    console.log("did not find value")
}