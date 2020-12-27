const date = new Date();

const renderCalendar = () => { 
    date.setDate(1);

const monthDays = document.querySelector('.days');

const lastDayCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

const nextDays = 6 - lastDayIndex;

console.log(lastDayIndex)

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

//document.querySelector('.date p').innerHTML = new Date().toDateString();
document.querySelector('.date p').innerHTML = new Date().toDateString();

let days = "";


for(let x = firstDayIndex; x >0; x--){
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}

for(let i = 1; i <= lastDayCurrentMonth; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today" onclick="selectOption()">${i}</div>`;  
        todays = i;
    }else{
        days += `<div>${i}</div>`;
    }
}


for(let j = 1; j <= nextDays; j++){
    days += `<div class="nex-date">${j}</div>`;
    monthDays.innerHTML = days;
}

}


document.querySelector(".prev").addEventListener("click", () =>{
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector(".next").addEventListener("click", () =>{
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})


function selectOption(){
    var hoje = document.querySelector(".today");
    var selected = hoje.nodeValue;
    console.log(selected);
}


renderCalendar();