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

// =========================
// Counter
// =========================

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

// =========================
// Candles + Blow
// =========================

document.getElementById("blowBtn").onclick = ()=>{
    document.querySelectorAll(".flame").forEach(f=>f.remove());
    document.getElementById("loveText").classList.add("show");

    startTyping();
};

// =========================
// Typewriter Message
// =========================

const typewriter = document.getElementById("typewriter");

const message = `
احبج يا كل كياني و سعادتي و يا كل الناس و اغلاهم و كل عام و انتي بالف و مليون خير و كل عام و انتي بقربي و معاي و كل عام و انا احبج و انتي اثمن الناس و اجملهم و كل عام ان شاء الله يكبر حبنا و يصير اقوى كل سنه و عام و كل عام و انتي اهم ما عندي و احسن شي صار بحياتي و احلى و اجمل صدفات حياتي و كل عام و انتي بحياتي و كل عام و انا اشوفج تكبرين بعيوني و كل عام و انا احبج و اعشقج و اهواج و اهيمج و اموت فيج و اموت عليج و كل عام و انا مغرم فيج و مهيم فيج و مسحور فيج كل عام و انتي فاتنتني بجمالج و عسى الله لا يحرمني منج و يخليج لي العمر كله يا اغلى من عيوني و نظرها و اقرب الناس حق قلبي و اطهر و قلب و ابيض قلب بهالدنيا و يا احلى من شافت عيوني و يا اجمل عيون بهالكون عقبال المليون سنه كلهم بقربي و يمكن ما اكون افضل واحد يكتب كلام نفس جذي بس انا اكثر واحد بهالدنيا و هالكون يحبج و اكثر واحد يهتم لج و يخاف عليج اكثر من نفسه و يحاتيج من الكل حتى من القريب لج و البعيد و على كثر ما كبرتي للحينج ياهل بعيوني و طول عمرج بتضلين ياهل بعيوني و كل عام و انتي بخير يا اجمل ابتسامه شافتها عيوني و ياللي ضحكتها تشرح قلبي و صدري و تذوبني كلي و يا اجمل ايامي و سنيني احبج وايد ياللي ما تكمل ايامي الا بضحكتها و شوفتها و ياللي مستحيل امل من شوفتها و جمال ابتسامتها و جمال عيونها و يا احلى صوت سمعته بحياتي كلها و ياحظي جداً ياحظي يوم تعرفت عليج و زانت ايامي بوجودج احلى صدف حياتي ختمتيها انتي باليوم اللي عرفتج فيه يا كل الناس و كل البشر و كل هالكون احبج جداً جداً جداً والله ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
`;

let index = 0;

function startTyping(){
    typewriter.innerHTML = "";
    index = 0;
    type();
}

function type(){
    if(index < message.length){
        typewriter.innerHTML += message.charAt(index);
        index++;
        setTimeout(type, 25);
    }
}