
// // it is used when promise failed then use reject function

// let prm = new Promise( (reject)=>     // Promise(callback_function)
// {
//     console.log("Executer function ...");

//     reject("failure");
// }
// );

// console.log(prm);

// // it is used when promise succuss then use resolve function

// let prm1 = new Promise( (resolve)=>     // Promise(callback_function)
// {
//     console.log("Executer function ...");

//     resolve("succusss");
// }
// );

// console.log(prm1);

// the promis was fullfield only then then function will execute 

let prm2 = new Promise( (resolve)=>     // Promise(callback_function)
{
    console.log("Executer function ...");

    resolve({id:20, name:"mallikarjun"});
}
);


prm2.then(     // then(callback_fuction)
(result)=>
{
    console.log(result);
}
);

// the promis was unfullfield only then catch function will execute 

let prm3 = new Promise( (reject, resolve)=>     // Promise(callback_function)
{
    console.log("Executer function ...");

    reject("failure");
}
);


prm3.catch(     // catch(callback_fuction)
(result)=>
{
    console.log(result);
}
);