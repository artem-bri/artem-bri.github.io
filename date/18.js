let divFon = document.querySelector('.oclock')
let pHour = document.querySelector('.p-hour')
let pDay = document.querySelector('.p-day')


function myTime() {
    let date = new Date()
    console.log(date)
    let hour = date.getHours()
    let hv = date.getMinutes()
    let sknd = date.getSeconds()

    hv = hv < 10 ? '0' + hv : hv;
    sknd = sknd < 10 ? '0' + sknd : sknd;
    hour = hour < 10 ? '0' + hour : hour;


    pHour.innerHTML = hour + ":" + hv + ":" + sknd 


    let day = date.getDay()
    let dayName = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', "п'ятниця", 'субота']


    let num = date.getDate()
    num = num < 10 ? '0' + num : num

    let mnth = date.getMonth()
   let mnthName = ['сичня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'лисопада', 'грудня',]

   let year = date.getFullYear()

   pDay.innerHTML = dayName[day] + ', ' + num + ' '
   + mnthName[mnth] + ' ' + date.getFullYear()


}
myTime()
setInterval(() => {
    myTime()
}, 1000);