function string_even_or_odd(str){
    const size= str.length;
    console.log(str, size);
    if(size%2===0){
        console.log('even string');
        return true;
    } 
    else{
        console.log('Odd string');
        return false;
    }
    
    
}
string_even_or_odd('Dhaka');
string_even_or_odd('Tusher');
string_even_or_odd('S.M Tusher Ahmmed Raj');