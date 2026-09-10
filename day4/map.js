 let arr = [10,20,30,40,50];

// function add(x)
// {
//     return x*x;
// }
// console.log(arr.map(add));


// anther way function delaration

console.log(arr.map(function add(x)
{
    return x*x;
}
));


//anther wayc with arrow function

console.log(arr.map((x) =>
                            {
                                return x*x;
                            }
                    ));

// simple way of arrow function

console.log(arr.map((x)=>  x*x ));  


