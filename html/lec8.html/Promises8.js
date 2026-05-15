// let myPromise = new Promise((resolve, reject) => {
//      resolve();
//     // reject();
// });

// myPromisePromise.then(()=>{
//     console.log("doneee");
    
// }).catch(()=>{
//     console.log("errrr");
    
// })
//  console.log(myPromise);



const arr = [
 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0', // space removed
 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
 'https://plus.unsplash.com/premium_photo-1686730540277-c7e3a5571553?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
];

const imageEl = document.querySelector('img');
let num = 0;

// first image show
imageEl.setAttribute('src', arr[0]);

setInterval(function(){
    imageEl.setAttribute('src', arr[num]);
    num = (num + 1) % arr.length;
}, 2000);