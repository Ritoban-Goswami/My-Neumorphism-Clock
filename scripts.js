const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");



setInterval(() => {
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    let ms = day.getMilliseconds();
    ss = ss + ms / 1000;

    hr.style.transform = `rotateZ(${((hh) * 30) + (mm) / 12}deg)`;
    min.style.transform = `rotateZ(${mm * 6}deg)`;
    sec.style.transform = `rotateZ(${((ss) + 23) * 6}deg)`;
    console.log(hh, mm, ss, ms);
}, 20);