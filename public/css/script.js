
let barparent = document.querySelectorAll(".stat_carac-bar");

barparent.forEach((parent)=>{
    let carac = parent.dataset.test
    let percentageBar = document.createElement("div");
    percentageBar.classList.add("stat_carac-bar-child");
    parent.appendChild(percentageBar);
    let caracMax = (carac*100)/180;
    console.log(caracMax);
    percentageBar.style.width = `${caracMax}%`;
})
