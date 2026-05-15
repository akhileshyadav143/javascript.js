let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');
btn.addEventListener("click",()=>{
    let city=input.value;
    let apiK='9f6290d6cda9a36a63755fadee71f83d'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}`).then((data)=>{
        return data.json()

    }).then((info)=>{
        console.log(info);
       let time= new Date().toLocaleTimeString()
       console.log(time);
       
        

    })
})
