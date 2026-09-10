let arr = [10,20,30,40,50,20, 60];
console.log(arr);

//methods of operation 
let addinginFirst =arr.unshift(100);
console.log(addinginFirst);  // it add beging [12,10,20,30,40,50]
console.log(arr.pop());   // remove the last element

let a = arr.shift(37);   // it remove first element
console.log(arr);

let b= arr.push(35);  // add end element
console.log(arr);
console.log(b);


console.log(arr.indexOf(30));  // 2
console.log(arr.indexOf(20));  // its gives first preparation 1
console.log(arr.lastIndexOf(20)) //5


//it is splice()

// let arr = [10,20,30,40,50,20, 60];

console.log("if you need remove the elemnt at time 2 \n");
let spl = arr.splice(1,2);  // remove the element 20 , 30 
console.log(arr);
console.log(spl);


console.log("if you need add element in middle   \n");
console.log(arr.splice(2,0,45)); // [10,20,45,30,40,50,20, 60]
console.log(arr);

console.log("if you need replce in middle   \n");
console.log(arr.splice(4,2,55,77)); 
console.log(arr);