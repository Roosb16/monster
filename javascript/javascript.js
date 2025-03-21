// Const veranders nooit, het zijn contstanten
const afbeeldingStandaard = document.getElementById("standaard"); // Element zoeken bij het id
const knopSlapen = document.getElementById("knopSlapen");
const knopEten = document.getElementById("knopEten");
const knopSpelen = document.getElementById("knopSpelen");
const knopLamp = document.querySelector("#knopLamp"); // Element zoeken met querySelector, eerste element wat je tegenkomt in het document
const voedsel = document.querySelector(".voedsel");
const knopDruif = document.getElementById("knopDruif");
const knopHamburger = document.getElementById("knopHamburger");
const knopCake = document.getElementById("knopCake");
const knopBal = document.getElementById("knopBal")
const progressSlapen = document.querySelector("#progresSlapen");
const progressEten = document.querySelector("#progresEten");
const progressSpelen = document.querySelector("#progresSpelen");
const speel = document.querySelector("#speel");
const menu = document.getElementById("menu");
const reload = document.getElementById("reload");
const dood = document.getElementById("dood");

// GELUID TOEVOEGEN
const etenGeluid = new Audio(); // Maakt een nieuw audio element aan
etenGeluid.src = "geluid/eten-geluid.wav"; // Zoekt het geluid in de mapjes

const slapenGeluid = new Audio();
slapenGeluid.src = "geluid/slapen-geluid.wav";

const spelenGeluid = new Audio();
spelenGeluid.src = "geluid/spelen-geluid.wav";

// Let veranderd door de game heen, het zijn variabelen
let dobbel = document.querySelector("#dobbel");
let eten = 20;
let voeding = 20;
let slaap = 20;
let genoegSlaap = 20;
let spelen = 20;
let energie = 20;

// Eten progressie bar setInterval
let intervalEten = setInterval(() => {
    eten--; // -1
    progressBar(); // De functie van de progressbar word aangeroepen

    if(eten === 0) { // Wanneer eten gelijk is aan 0 stopt de interval en komt er een nieuwe afbeelding
        clearInterval(intervalEten);
        afbeeldingStandaard.src = "img/dood.png";
        doodMode()
    }
}, 1000); // De tijd die het duurt voordat er -1 eten word gedaan

// Slaap progressie bar setInterval
let intervalSlaap = setInterval(() => {
    slaap--; // -1
    progressBar(); // De functie van de progressbar word aangeroepen

    if(slaap === 0) { // Wanneer slaap gelijk is aan 0 stopt de interval en komt er een nieuwe afbeelding
        clearInterval(intervalSlaap);
        afbeeldingStandaard.src = "img/dood.png";
        doodMode()
    }
}, 2000); // De tijd die het duurt voordat er -1 slapen word gedaan

// Spelen prograssie bar setInterval
let intervalSpelen = setInterval(() => {
    spelen--; // -1
    progressBar() // De functie van de progressbar word aangeroepen

    if(spelen === 0) { // Wanneer spelen gelijk is aan 0 stopt de interval en komt er een nieuwe afbeelding
        clearInterval(intervalSpelen);
        afbeeldingStandaard.src = "img/dood.png";
        doodMode()
    }
}, 1500); // De tijd die het duurt voordat er -1 spelen word gedaan

// FUNCTIONS
// Geef eten functie
function geefEten() {
    if (eten < 20) { // Als eten kleiner is dan 20, dan word er +2 toegevoegd bij het uitvoeren van de actie
        eten += 2;
        etenGeluid.currentTime = 0; // Geluid word vanaf het begin afgespeeld iedere keer opnieuw
        etenGeluid.play(); // Laat het geluid afspelen wanneer deze actie word uitgevoerd
        dobbelen() // De functie van dobbelen word aangeroepen

        if (eten > voeding) { // Als eten groter is dan voeding, word er minder toegevoegd dan wat er staat om het gelijk te houden aan voeding
            eten = voeding;
            progressBar(); // De functie van de progressbar word aangeroepen
        }
    }
}

// Gaan slapen
function gaanSlapen() {
    if (slaap < 20) { // Als slaap kleiner is dan 20, dan word er +5 toegevoegd bij het uitvoeren van de actie
        slaap += 5;
        slapenGeluid.currentTime = 0; // Geluid word vanaf het begin afgespeeld iedere keer opnieuw
        slapenGeluid.play(); // Laat het geluid afspelen wanneer deze actie word uitgevoerd

        if (slaap > genoegSlaap) {
            slaap = genoegSlaap; // Als slaap groter is dan genoegSlaap, word er minder toegevoegd dan wat er staat om het gelijk te houden aan genoegSlaap
            progressBar(); // De functie van de progressbar word aangeroepen
        }
    }
}

// Gaan spelen
function gaanSpelen() {
    if (spelen < 20) { // Als spelen kleiner is dan 20, dan word er +2 toegevoegd bij het uitvoeren van de actie
        spelen += 3;
        spelenGeluid.currentTime = 0; // Geluid word vanaf het begin afgespeeld iedere keer opnieuw
        spelenGeluid.play(); // Laat het geluid afspelen wanneer deze actie word uitgevoerd

        if (spelen > energie) {
            spelen = energie; // Als spelen groter is dan energie, word er minder toegevoegd dan wat er staat om het gelijk te houden aan energie
            progressBar() // De functie van de progressbar word aangeroepen
        }
    }
}

//progress bar leeglopend 
function progressBar() {
    progressSlapen.style.height = (slaap / 20) * 100 + "%"; // Het getal slaap word door 20 gedeeld (20 is 100%) dat word * 100 gedaan voor het aantal persentage in de div
    progressEten.style.height = (eten / 20) * 100 + "%";
    progressSpelen.style.height = (spelen / 20) * 100 + "%";
}

// functie welke mode
function doodMode() {
    knopLamp.style.display = "none"; // Het element blijft weg door display "none"
    dobbel.style.display = "none"; // Het element blijft weg door display "none"
    voedsel.style.display = "none"; // Het element blijft weg door display "none"
    knopBal.style.display = "none"; // Het element blijft weg door display "none"
    speel.style.display = "none"; // Het element blijft weg door display "none"
    menu.style.display = "none"; // Het element blijft weg door display "none"
    reload.style.display = "block"; // Het element blijft aanwezig door display "block"
    dood.style.display = "block"; // Het element blijft aanwezig door display "block"
}

function wakkerMode() {
    knopLamp.style.display = "none"; // Het element blijft weg door display "none"
    dobbel.style.display = "none"; // Het element blijft weg door display "none"
    voedsel.style.display = "none"; // Het element blijft weg door display "none"
    knopBal.style.display = "none"; // Het element blijft weg door display "none"
    speel.style.display = "none"; // Het element blijft weg door display "none"
    reload.style.display = "none"; // Het element blijft weg door display "none"
}

function slaapMode() {
    knopLamp.style.display = "block"; // Het element blijft aanwezig door display "block"
    dobbel.style.display = "none"; // Het element blijft weg door display "none"
    voedsel.style.display = "none"; // Het element blijft weg door display "none"
    knopBal.style.display = "none"; // Het element blijft weg door display "none"
    speel.style.display = "none"; // Het element blijft weg door display "none"
    reload.style.display = "none"; // Het element blijft weg door display "none"
}

function eetMode() {
    knopLamp.style.display = "none"; // Het element blijft weg door display "none"
    dobbel.style.display = "block"; // Het element blijft aanwezig door display "block"
    voedsel.style.display = "block"; // Het element blijft aanwezig door display "block"
    knopBal.style.display = "none"; // Het element blijft weg door display "none"
    speel.style.display = "none"; // Het element blijft weg door display "none"
    reload.style.display = "none"; // Het element blijft weg door display "none"
}

function speelMode() {
    knopLamp.style.display = "none"; // Het element blijft weg door display "none"
    dobbel.style.display = "none"; // Het element blijft weg door display "none"
    voedsel.style.display = "none"; // Het element blijft weg door display "none"
    knopBal.style.display = "block"; // Het element blijft aanwezig door display "block"
    speel.style.display = "block"; // Het element blijft aanwezig door display "block"
    reload.style.display = "none"; // Het element blijft weg door display "none"
}

// dobbelen voor eten
function dobbelen() {
    let dobbel = document.querySelector("#dobbel"); // Veranderd de tekst van de p tag
    let randomGetal = Math.ceil(Math.random () * 3); // Geeft een random getal wat afgerond is naar boven tussen 1 en 3

    if (randomGetal === 1) {
        dobbel.textContent = randomGetal + " Je mag de druif"; // Wanneer er 1 word geooid krijgt de p deze tekst
    } else if (randomGetal === 2) {
        dobbel.textContent = randomGetal + " Je mag de Hamburger"; // Wanneer er 2 word geooid krijgt de p deze tekst
    } else {
        dobbel.textContent = randomGetal + " Je mag de cupcake"; // Wanneer er anders word geooid dan hierboven krijgt de p deze tekst
    }
}

// EVENTLISTNERS
reload.addEventListener("click", function () {
    window.location.reload(true);
})

// Eten actief
knopDruif.addEventListener("click", geefEten); // Bij de "knopDruif" word de functie geefEten uitgevoerd als er op geklikt word
knopHamburger.addEventListener("click", geefEten);
knopCake.addEventListener("click", geefEten);

// Slapen actief
knopLamp.addEventListener("click", gaanSlapen);

// Spelen actief
knopBal.addEventListener("click", gaanSpelen);

// Knoppen op de pagina die de afbeelding veranderen
knopLamp.addEventListener("click", function() { // Wanneer je op de knop klikt krijg je een andere afbeelding te zien en word de functie "wakkerMode" aangeroepen
    afbeeldingStandaard.src = "img/slapen.png";
    wakkerMode();
});

knopSlapen.addEventListener("click", function() { // Wanneer je op de knop klikt krijg je een andere afbeelding te zien en word de functie "slaapMode" aangeroepen
    afbeeldingStandaard.src = "img/wakker-slapen.png";
    slaapMode();
});

knopEten.addEventListener("click" , function() { // Wanneer je op de knop klikt krijg je een andere afbeelding te zien en word de functie "eetMode" en "dobbelen"aangeroepen
    afbeeldingStandaard.src = "img/eten.png";
    eetMode();
    dobbelen();
});

knopSpelen.addEventListener("click" , function() { // Wanneer je op de knop klikt krijg je een andere afbeelding te zien en word de functie "speelMode" aangeroepen
    afbeeldingStandaard.src = "img/spelen.png";
    speelMode();
});

// BRONNEN
// https://freesound.org/people/zmobie/sounds/319762/
// https://freesound.org/people/WasabiWielder/sounds/334209/
// https://freesound.org/people/wesleywestmusic/sounds/680669/
// https://stackoverflow.com/questions/9419263/how-to-play-audio (nieuw element geleerd)
// https://images.app.goo.gl/6NG31AmLzhRQtvNH6
// https://www.youtube.com/watch?v=5hLbCC2YPu0 (nieuw element geleerd)