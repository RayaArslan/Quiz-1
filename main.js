let num1 = 10
let num2 = 20
let num3 = 5

if (num1> num2){
    if(num1>num3){
        console.log(`The greatest number is num1 = ${num1}`)
    }
    else{
        console.log(`The greatest number is num3 = ${num3}`)
    }
}
else if (num2>num3){
    console.log(`The greatest number is num2 = ${num2}`)
}
else{
    console.log(`The greatest number is num3 = ${num3}`)
}