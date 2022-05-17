function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}
function dienum(num){
    let facs = factorial(5)/factorial(7-num);
    return facs * (num-1)/(Math.pow(6, num-1));
}

let sum = 0;

for(let i = 2; i <= 7; i++)
{
    console.log(dienum(i)*Math.pow(6, i-1));
    sum += dienum(i);
}

console.log('sum:', sum);