function exp (){
    console.log("execution starting");
    return new Promise((resolve, reject) => {
        setTimeout(() => 
        {
            console.log("execution completed");
            resolve();
        }, 2000);

    });

}

try {
    await exp();
    console.log("after await");
} catch (error) {
    console.error("Error occurred:", error);
}