const pages = document.querySelectorAll(".page");

function show(id){
    pages.forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

document.getElementById("startBtn").onclick = ()=>{
    show("counter-screen");
};

document.getElementById("toQuestionBtn").onclick = ()=>{
    show("question-screen");
};

document.getElementById("yesBtn").onclick = ()=>{
    show("cake-screen");
};

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
    noBtn.style.position="absolute";
    noBtn.style.top=Math.random()*300+"px";
    noBtn.style.left=Math.random()*300+"px";
});

// counter
const startDate = new Date("2024-01-01");

function update(){
    const now = new Date();
    const diff = now - startDate;

    document.getElementById("days").innerText = Math.floor(diff/86400000);
    document.getElementById("hours").innerText = Math.floor(diff/3600000)%24;
    document.getElementById("minutes").innerText = Math.floor(diff/60000)%60;
    document.getElementById("seconds").innerText = Math.floor(diff/1000)%60;
}

setInterval(update,1000);
update();

// blow
document.getElementById("blowBtn").onclick = ()=>{
    document.querySelectorAll(".flame").forEach(f=>f.remove());
    document.getElementById("loveText").classList.add("show");
};