let myPromise = new Promise((resolve, reject) => {
     resolve();
    // reject();
});

myPromisePromise.then(()=>{
    console.log("doneee");
    
}).catch(()=>{
    console.log("errrr");
    
})
 console.log(myPromise);