// prototype in object

const callText = {
    hello(){
        console.log("Hello how are you")
    },
    hello1:function() {
        console.log("hello2")
    }
}

const employee = {
    name:"mallu",
    age:20
}

callText.__proto__ = employee;