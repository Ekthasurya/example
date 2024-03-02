var num = 10;
var count =0;
for(var i =1;i<=13;i++){
    if(num % i===0){
        count++;
    }
}

if(count === 1){
    console.log("it is prime number");
}
else{
    console.log("it is not prime number");
}