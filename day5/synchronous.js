function fun1() 
{
    console.log("fun1 is started execution");
    let start = Date.now();
    let dealay = 5000;
    let end = start + dealay;

    while (Date.now() <= end){

    }
    console.log("fun1 is compleate execution");

}

function fun2() 
{
    console.log("fun2 is started execution");
    let start = Date.now();
    let dealay = 5000;
    let end = start + dealay;

    while (Date.now() <= end){

    }
    console.log("fun2 is compleate execution");

}
function fun3() 
{
    console.log("fun3 is started execution");
    let start = Date.now();
    let dealay = 5000;
    let end = start + dealay;

    while (Date.now() <= end){

    }
    console.log("fun3 is compleate execution");

}

fun1();
fun2();
fun3();