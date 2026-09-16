async function fetchData(){

    const data= await fetch("https://catfact.ninja/fact");
    // console.log(data); // it gives unreadable structre
    const txt = await data.json();
    console.log(txt);
   const txt2 = JSON.stringify(txt);
    console.log(txt2);

}

fetchData();