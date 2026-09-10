function outerFunction()
{
let outerVar = 10;
 function innerFunction()
 {
    console.log("outerVar: ",outerVar);
 }

return innerFunction;
}
exp = outerFunction();
console.log(exp());
