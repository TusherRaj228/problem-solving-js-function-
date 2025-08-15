// Take four parameters. Multiply the four numbers and then return the result

function Multiply_numbers (a ,b ,c ,d){
    const Multiply=a*b*c*d;
    return Multiply;
}
let result = Multiply_numbers(2,4,6,8);
console.log(result);


// Take a number if the number is odd multiply it by 2 and return the result. 
// If the number is even divide it by two and return the result.

function check_Even_Odd(num){
    if(num%2===0){
        let result1= num*2;
        return result1;
    }
    else{
        let result2= num/2;
        return result2;
    }
}
console.log (check_Even_Odd (8));
console.log (check_Even_Odd(9));

