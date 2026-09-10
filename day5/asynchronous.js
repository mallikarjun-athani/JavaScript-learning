//  it is setTimer it use for set the time dealay execution 

// function fun1() 
// {
//     console.log("fun1 is started execution");
//     console.log("fun1 is compleate execution");

// }

// function fun2() 
// {
//     console.log("fun2 is started execution");
//     let start = Date.now();
//     let dealay = 5000;
//     let end = start + dealay;

//     while (Date.now() <= end){

//     }
//     console.log("fun2 is compleate execution");

// }
// function fun3() 
// {
//     console.log("fun3 is started execution");
//     let start = Date.now();
//     let dealay = 5000;
//     let end = start + dealay;

//     while (Date.now() <= end){

//     }
//     console.log("fun3 is compleate execution");

// }

// function fun4() 
// {
//     console.log("fun4 is started execution");
//     console.log("fun4 is compleate execution");

// }

// fun1();
// setTimeout(fun2,5000);  // syntax = (callback_function , timer)
// setTimeout(fun3,1000);
// fun4();


// setInterval it use for fetching data in live for example set the time per second its execute 

function fun() 
{
    console.log("Fetching data.......");
    

}

let IntervalvalueID=setInterval(fun,2000);  // syntax setInterval(callback_function , time )

// stop the execation then use clearInterval

// clearInterval(IntervalvalueID );

setTimeout(()=>clearInterval(IntervalvalueID) , 10000);  // it clear per second