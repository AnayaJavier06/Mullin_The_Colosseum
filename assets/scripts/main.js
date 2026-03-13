import {summons, weapons, charachters} from "./definitions.js";

// Essential variables / information
const visuals = document.getElementById("canvas");
const choosingSection = document.getElementById("CHOOSING");
const fightingSection = document.getElementById("FIGHTING");
const optionsP1 = document.getElementById("optionsP1");
const optionsP2 = document.getElementById("optionsP2");
const starter = document.getElementById("starter");
const weaponsSubsection = document.getElementById("weapons");
const summonsSubsection = document.getElementById("summons");
const smIndexer = document.getElementById("smIndexer");
const spellsSubsection = document.getElementById("spells");
const spIndexer = document.getElementById("spIndexer");
const theBagSubsection = document.getElementById("theBag");
const tbIndexer = document.getElementById("tbIndexer");
const resultsSection = document.getElementById("RESULTS");
let canvas = visuals.getContext("2d");
let inputs = document.getElementsByTagName("input");
let buttons = document.getElementsByTagName("button")
let ch1Chosen = false;
let ch2Chosen = false;
let summonIndex = 0;
let spellsIndex = [0, 1, 2];
let theBagIndex = [0, 1, 2];
let turns = 0;
let p1;
let p2;

// Functions Frontend

function drawOptions(container) {
    let row;

    charachters.forEach((ch, i) => {
        if (i % 3 === 0) {
            row = document.createElement("tr");
            container.appendChild(row);
        }

        let cell = document.createElement("td");
        cell.innerHTML = `<input type="radio" name=${"charachter" + container.className[6]} class=${container.className} id=${ch.id + container.className[6]}><label for=${ch.id + container.className[6]} class=${container.className}>${ch.icon}</label>`;
        row.appendChild(cell);
    });

    
    row = document.createElement("tr");
    row.innerHTML = `<td></td><td class="player1" id="random">Rand</td><td></td>`;
    container.appendChild(row);
}

function showWeapon() {
    // NOTE: Fix the addEventListeners
    let currWeapon;

    for (let i = 0; i < p1.theBag[0].length - 1; i++) {
        if (p1.theBag[0][i].isActive === true) {
            currWeapon = p1.theBag[0][i];
        }
    }

    let legend = document.createElement("legend");
    legend.innerHTML = currWeapon.name;
    weaponsSubsection.appendChild(legend);
    // legend.addEventListener("onmouseover", showDescMon);

    let ability = document.createElement("p");
    ability.innerHTML = currWeapon.ability.name;
    weaponsSubsection.appendChild(ability);
    // ability.addEventListener("onmouseover", showDescAbb);

    for (let i = 0; i < currWeapon.atks.length - 1; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = currWeapon.atks[i].name;
        btn.setAttribute("onclick", currWeapon.atks[i].action);
        weaponsSubsection.appendChild(btn);
        // btn.addEventListener("onmouseover", showDescAtk);
    }
}

function showSummon(index) {
    // NOTE: Fix the addEventListeners
    let currSummon = p1.activeSummon[summonIndex];

    let legend = document.createElement("legend");
    legend.innerHTML = currSummon.name;
    summonsSubsection.appendChild(legend);
    // legend.addEventListener("onmouseover", showDescMon);

    for (let i = 0; i < currSummon.atks.length - 1; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = currSummon.atks[i].name;
        btn.setAttribute("onclick", currSummon.atks[i].action);
        weaponsSubsection.appendChild(btn);
        // btn.addEventListener("onmouseover", showDescAtk);
    }

    // NOTE: Check if this works later
    smIndexer.addEventListener("click", summonIndex++);
    console.log(summonIndex);
}

function showSpells(indexes) {
    for (let index in indexes) {
        let btn = document.createElement("button");
        btn.innerHTML = p1.spells[i].name;
        btn.setAttribute("onclick", p1.spells[i].action);
        spellsSubsection.appendChild(btn);
        // btn.addEventListener("onmouseover", showDescSpl);
    }

    // NOTE: Check if this works later
    spIndexer.addEventListener("click", spellsIndex++);
    console.log(spellsIndex);
}

function showTheBag(indexes) {
    // I'll do this later
}

// Functions Backend

function startFight() {
    if (p1.hp === 0 || p2.hp === 0) {
        fightingSection.style.display = "none";
        resultsSection.style.display = "flex";
    }
    if (p2.turn === true) {
        for (let i = 0; i < buttons.length - 1; i++) {
            buttons[i].disabled = true;
        }
    }

    showWeapon();
    showSummon(summonIndex);
    showSpells(spellsIndex);
    showTheBag(theBagIndex);
}

function coinThrow() {
    let coin = Math.floor(Math.random() * 2) + 1;

    if (coin === 1) {
        p1.turn = true;
    } else if (coin === 2) {
        p2.turn = true;
    } else {
        window.location.reload();
    }

    startFight();
}

function chooseCharachter() {
    for (let i = 0; i < inputs.length - 1; i++) {
        if (inputs[i].checked) {
            if (inputs[i].className === "player1") {
                charachters.forEach((ch1) => {
                    if (String(ch1.id) + "1" === inputs[i].id) p1 = ch1;
                    ch1Chosen = true;
                });
            } else if (inputs[i].className === "player2") {
                charachters.forEach((ch2) => {
                    if (String(ch2.id) + "2" === inputs[i].id) p2 = ch2;
                    ch2Chosen = true;
                });
            } else {
                window.location.reload();
            }
        }
    }
    if (ch1Chosen && ch2Chosen) {
        choosingSection.style.display = "none";
        fightingSection.style.display = "flex";
        coinThrow();
    }
}

// Game loop
function startGame() {
	choosingSection.style.display = "flex";
    fightingSection.style.display = "none";

    drawOptions(optionsP1);
    drawOptions(optionsP2);

    starter.addEventListener("click", chooseCharachter);
}

window.addEventListener("load", startGame);
