// alert("Hello JS!");

let x = 10;
let y = 10;
let a = 10;
let b = 1.5;
let text = "aaaaaaa";

function noConection(){
    alert("No Conected");
}

function myFunc1(){
    let i = 1.5;
    let x = document.write("Js");
}

function myFunc2(myFunc1){
    alert(myFunc1);
}

function enterName(){
    let name;
    name = prompt();
    document.getElementById("name").innerHTML = name;
}

function alertTemp(t){
    if (t > 22) {
        let newT = t - 22;
        alert("Температура вашої кімнати: " +t+" це на " + newT  + " більше за норму");

    } else if (t < 18 )
    {
        let newT = 18 - t;
        alert("Температура вашої кімнати: " +t+" це на " + newT + " менше за норму");
    } else{
        alert("Температура кімнати в нормі");
    }
}

function sum(){
    let a = prompt("Введіть 1 число");
    let b = prompt("Введіть 2 число");
    a = parseInt(a);
    b = parseInt(b);

    alert(a + b);
}


//13.12.1901 - 19.01.2038
function setTime(){
    let d = new Date();
    console.log(d);
    
    let dayOfMount = d.getDate();
    console.log(dayOfMount);
    
    let dayOfWeek = d.getDay();
    console.log(dayOfWeek); //0 - 
    
    let year = d.getFullYear();
    console.log(year);
    
    let month = d.getMonth() + 1;
    console.log(month);
    
    let hour = d.getHours();
    console.log(hour);
    
    let minute = d.getMinutes();
    console.log(minute);
    
    let seconds = d.getSeconds();
    console.log(seconds);
    
    let millis = d.getMilliseconds();
    console.log(millis);

    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = dayOfMount;
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + seconds;

    let days = ['Пн','Вт','Ср','Чт','Пт','Сб','Нд'];

    document.getElementById('wday').innerHTML = days[dayOfWeek];


let nameMonth = []

document.getElementById('month').innerHTML = nameMonth[month];
let t = setTimeout(setTime, 1000);
}
let counter = 0;
function changeColor(){
    counter++;
    let titleElement = document.getElementById('chColor');
    switch(counter){
        
        case 1: titleElement.style.color = 'red'; break;
        case 2: titleElement.style.color = 'green'; break;
        case 3: titleElement.style.color = 'yellow'; break;
        case 4: titleElement.style.color = 'Tan'; break;
        case 5: titleElement.style.color = 'silver'; break;
        case 6: titleElement.style.color = 'Turqiose'; break;
        case 7: counter = 0; break;
    }
}
        let hum = 100;
        function Flower(h)
        {
            hum -= h;
            let progressBar = document.getElementById('flower').value = hum;
            
            if(hum < 20){
                let newElement = document.createElement('div');
                newElement.innerHTML = 
                "<div align = 'right' id = 'notification' style = 'color : red;'> Полий квітку!!!</div>";
                    newElement.setAttribute('id', 'test');
                    currentElement = document.getElementById('alert');
                    document.body.insertBefore(newElement, currentElement);
            }
        }
    function FlowerControll(){
        hum = 100;
        let progressBar = document.getElementById('flower').value = hum;
        let notification = document.getElementById('notification');
        notification.style.display = 'none'
    }
        function deleteNotification(){
        notification.remove();
    }     

    let image = document.getElementById("curpetImg");
    let imageArr = [
        "https://i.ibb.co/9ZvgNtP/kover1.jpg",//0
        "https://i.ibb.co/NFBNM5v/kover2.png",//1
        "https://i.ibb.co/xgC8Kj0/kover3.png",//2
        "https://i.ibb.co/LCqXjBp/kover0.png",//3
        "https://i.ibb.co/K6phLpd/carpet.png" //4
    ];
    let selector = 0;
    function carpetSwitch(){
        image.src = imageArr[selector];
        selector++;
        if(selector > 4) selector = 0
    }

    function getLocation(){
        alert("Добрый день , мы из Украины!");
    }