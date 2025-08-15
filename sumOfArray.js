// write a function to give the sum of all numbers in  an array

function sum_of_array(numbers){
    let sum=0;
    for(const number of numbers){
         console.log(number);
         sum= sum+number;
    }
   

}
const numbs =[ 2,5,7,9,11,15,20];
const sum = sum_of_array(numbs);
console.log('The number of sum is', sum);