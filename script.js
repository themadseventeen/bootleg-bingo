var container = document.querySelector("div.container")
var resetBtn = document.querySelector("button.reset")


//console.log(container)

var vrijednost_polja = [
    "Spike Puma",
    "Viper Zero",
    "Su-27SM",
    "Su-24",
    "Mig-25",
    "AWACS",
    "Russian 10.0 OP premium",
    "Leopard 2 140",
    "R-27EA",
    "Datalink",
    "F-15C USA",
    "F-4F ICE",
    "Ariete nerf",
    "F-20",
    "R-77",
    "MICA EM",
    "French IFV",
    "AMRAAM",
    "Leclerc T4",
    "JAS39C Sweden",
    "Radars broken on update",
    "No changes to RB",
    "Sparrow nerf",
    "ARM",
    "M10 Booker",
    "More BR compression",
    "XF-2A",
    "Derby",
    "Python 4",
    "AIM-9X block 1",
    "R-74M",
    "Better RB gamemodes",
    "F-22",
    "F-35",
    "F/A-18 A",
    "Mirage 4",
    "Mirage G"
];

let kliknuto = new Array(25).fill('false')

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    
    return array;
}

//console.log(localStorage.getItem("kombinacija"))

resetBtn.addEventListener("click", ()=>{
    if(localStorage.getItem("kombinacija")!=null){
        localStorage.removeItem("kombinacija");
        localStorage.removeItem("kliknuti");
        window.location.reload()
    }
})

if(localStorage.getItem("kombinacija")==null){
    shuffle(vrijednost_polja)
    var stringic = ""
    vrijednost_polja.forEach(polje => {
        stringic+=polje
        if(polje!=vrijednost_polja[vrijednost_polja.length-1]){
            stringic+=","
        }
    });
    console.log(stringic)
    localStorage.setItem("kombinacija",stringic);
    localStorage.setItem("kliknuti",kliknuto)
}else{
    vrijednost_polja=localStorage.getItem("kombinacija").split(",")
    kliknuto=localStorage.getItem("kliknuti").split(",");
    console.log(kliknuto)
}

var offset = 0
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){

        var sadrzaj
        if(i==2 && j==2){
            sadrzaj = "Free"
            offset=1
        }else{
            sadrzaj = vrijednost_polja[i*5+j-offset]
        }

        var polje = document.createElement("button");
        var tekst = document.createElement("p");
        var x = document.createElement("div");
        x.innerText = "X"
        x.classList.add("closebox")
        tekst.innerText = sadrzaj;
        polje.classList.add("field");
        polje.appendChild(tekst);
        polje.appendChild(x);

        if(kliknuto[i*5+j]=='true'){
            polje.classList.add("clicked") 
            polje.lastChild.classList.add("show")
        }

        container.appendChild(polje);

    }
}

var polja = document.querySelectorAll(".field")
console.log(polja)

polja.forEach((polje,i)=>{
    polje.addEventListener("click", ()=>{
        polje.classList.toggle("clicked")
        polje.lastChild.classList.toggle("show")
        if(kliknuto[i]=='false'){
            kliknuto[i] = 'true';
        }else{
            kliknuto[i] = 'false';
        }
        localStorage.setItem("kliknuti",kliknuto)
    })
})