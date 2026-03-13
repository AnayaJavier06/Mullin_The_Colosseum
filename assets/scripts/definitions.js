import * as attack from "./attacks.js";

// CLASSES
class Charachter {
	constructor(name, id, ability, desc, hp, recPMana, maxPMana, maxMMana, spells, bag, turn, icon) {
		this.name = name;
		this.id = id;
		this.ability = ability;
		this.desc = desc;
		this.hp = hp;
		this.recPMana = recPMana;
		this.maxPMana = maxPMana;
		this.curPMana = this.maxPMana;
		this.maxMMana = maxMMana;
		this.spells = spells;
		this.theBag = bag;
		this.turn = turn;
		this.icon = icon;
		this.activeSummon = []
	}
}

class Summon {
	constructor(name, desc, hp, atkB, defB, atks, pCost, mCost, isActive) {
		this.name = name;
		this.desc = desc;
		this.hp = hp;
		this.atkB = atkB;
		this.defB = defB;
		this.atks = atks;
		this.pCost = pCost;
		this.mCost = mCost;
		this.isActive = isActive;
	}
}

class Weapon extends Summon {
	constructor(name, desc, ability, abilityDesc, hp, atkB, defB, atks, pCost, cCost, cCdesc, isActive) {
		super(name, desc, hp, atkB, defB, atks, pCost, isActive);
		this.ability = ability;
		this.abilityDesc = abilityDesc;
		this.cCost = cCost;
		this.cCdesc = cCdesc;
	}
}

// SUMMON DEFINITIONS
const ifrit = new Summon("Ifrit", "", 600, 27, 0.33, [], 7, 3, false);
const shiva = new Summon("Shiva", "", 550, 24, 0.35, [], 6, 3, false);
const alexander = new Summon("Alexander", "", 5000, 120, 0.85, [], 16, 1, false);
const odin = new Summon("Odín", "", 770, 78, 0.45, [], 7, 2, false);
const tonsberry = new Summon("Tonsberry", "", 200, 150, 0.99, [], 1, 1, false);
const hades = new Summon("Hades", "", 660, 90, 0.45, [], 6, 2, false);
const leviatan = new Summon("Leviatán", "", 910, 75, 0.66, [], 14, 5, false);
const titan = new Summon("Titán", "", 890, 110, 0.97, [], 12, 4, false);
const tifon = new Summon("Tifón", "", 390, 33, 0.2, [], 6, 2, false);
const chocomog = new Summon("Chocomog", "", 150, 16, 0.5, [], 8, 5, false);
const bahamut = new Summon("Bahamut", "", 1000, 65, 0.47, [], 15, 6, false);
const neoBahamut = new Summon("Neo Bahamut", "", 1500, 80, 0.5, [], 18, 8, false);
const bahamutZero = new Summon("Bahamut Zero", "", 2000, 120, 0.6, [], 20, 10, false);
const rahamut = new Summon("Rahamut", "", 800, 30, 0.25, [], 9, 4, false);
const kuja = new Summon("Kuja", "", 760, 100, 0.15, [], 9, 6, false);
const fenix = new Summon("Fénix", "", 900, 60, 0.10, [], 18, 4, false);
const lcdlmr = new Summon("Los Caballeros de La Mesa Redonda", "", 1300, 130, 0.72, [], 13, 7, false);
const anima = new Summon("Ánima", "", 400, 25, 0.05, [], 6, 3, false);
const jades = new Summon("Jades", "", 850, 64, 0.23, [], 10, 4, false);
const cactus = new Summon("Cactus", "", 600, 30, 0.07, [], 5, 3, false);
const meteoro = new Summon("Meteoro", "", 1030, 90, 0.7, [], 17, 2, false);
const malvoro = new Summon("Malvoro", "", 700, 70, 0.08, [], 7, 3, false);

// WEAPON DEFINITIONS
// NOTE: Change the cCost
const zafiro = new Weapon("Zafiro", "", undefined, "", 1800, 1.1, 0.75, [], 6, 0, "", false);
const ultimate = new Weapon("Ultimate", "", undefined, "", 3000, 2.5, 0.6, [], 10, 0, "", false);
const diamante = new Weapon("Diamante", "", undefined, "", 1.8, 1500, 0.8, [], 7, 0, "", false);
const rubi = new Weapon("Rubí", "", undefined, "", 1, 1000, 0.85, [], 6, 0, "", false);
const esmeralda = new Weapon("Esmeralda", "", undefined, "", 2000, 1.5, 0.55, [], 8, 0, "", false);
const jade = new Weapon("Jade", "", undefined, "", 0.7, 500, 0.5, [], 5, 0, "", false);
const omega = new Weapon("Omega", "", undefined, "", 2, 2500, 0.9, [], 9, 0, "", false);
const caos = new Weapon("Caos", "", undefined, "", 1, 1, 1, [], 1, 0, "", false);

// CHARACHTERS DEFINITIONS
const mulin = new Charachter("Mulín Lilith", "mulin", undefined, "", 10000, 8, 60, 25, [], [], undefined, "MLi");
const samanta = new Charachter("Mulín Samanta", "samanta", undefined, "", 9000, 7, 55, 24, [], [], undefined, "MSm");
const sabrina = new Charachter("Mulín Sabrina", "sabrina", undefined, "", 8500, 6, 50, 23, [], [], undefined, "MSb");
const fiona = new Charachter("Burro Fiona", "fiona", undefined, "", 6000, 4, 40, 20, [], [], undefined, "BFi");
const priscilla = new Charachter("Mulín Priscilla", "priscilla", undefined, "", 7500, 5, 44, 22, [], [], undefined, "MPr");
const wanda = new Charachter("Mulín Wanda", "wanda", undefined, "", 7500, 5, 46, 21, [], [], undefined, "MWa");

// LISTS
export const summons = [ifrit, shiva, alexander, odin, tonsberry, hades, leviatan, titan, tifon, chocomog, bahamut, neoBahamut, rahamut, kuja, fenix, lcdlmr, anima, jades, cactus, meteoro, malvoro];
export const weapons = [zafiro, ultimate, diamante, rubi, esmeralda, jade, omega, caos];
export const charachters = [mulin, samanta, sabrina, fiona, priscilla, wanda];
