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
	constructor(name, desc, hp, atkB, defB, weight, shield, atks, pCost, mCost, isActive, isFlying) {
		this.name = name;
		this.desc = desc;
		this.hp = hp;
		this.atkB = atkB;
		this.defB = defB;
		this.weight = weight; // 1: Flyer, 2: Light, 3: Heavy, 4: Grounded
		this.shield = shield; // XYZ - X: Type of target (1: Summon/Weapon, 2: Charachter, 3: Any), Y: Type of shield (1: Barrier, 2: mBarrier, 3: Reflect, 4: Shield, 5: Wall || 1: Mini, 2: Haste, 3: Slow, 4: Regen, 5: Resist, 6: ePatrum), Z: Turns remaining
		this.atks = atks;
		this.pCost = pCost;
		this.mCost = mCost;
		this.isActive = isActive;
		this.isFlying = isFlying;
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
// Structure: Name, Desc; Health, Attack Base, Deffense Base, Weight type, Attack list, Placing Cost, Maintain Cost, Is on battle, Is flying
const ifrit = new Summon("Ifrit", "", 600, 27, 0.33, 1, 0, [], 7, 3, false, false);
const shiva = new Summon("Shiva", "", 550, 24, 0.35, 3, 0, [], 6, 3, false, false);
const alexander = new Summon("Alexander", "", 5000, 120, 0.85, 4, 0, [], 16, 1, false, false);
const odin = new Summon("Odín", "", 770, 78, 0.45, 4, 0, [], 7, 2, false, false);
const tonsberry = new Summon("Tonsberry", "", 200, 150, 0.99, 2, 0, [], 1, 1, false, false);
const hades = new Summon("Hades", "", 660, 90, 0.45, 4, 0, [], 6, 2, false, false);
const leviatan = new Summon("Leviatán", "", 910, 75, 0.66, 1, 0, [], 14, 5, false, false);
const titan = new Summon("Titán", "", 890, 110, 0.97, 3, 0, [], 12, 4, false, false);
const tifon = new Summon("Tifón", "", 390, 33, 0.2, 1, 0, [], 6, 2, false, false);
const chocomog = new Summon("Chocomog", "", 150, 16, 0.5, 2, 0, [], 8, 5, false, false);
const bahamut = new Summon("Bahamut", "", 1000, 65, 0.47, 1, 0, [], 15, 6, false, false);
const neoBahamut = new Summon("Neo Bahamut", "", 1500, 80, 0.5, 1, 0, [], 18, 8, false, false);
const bahamutZero = new Summon("Bahamut Zero", "", 2000, 120, 0.6, 3, 0, [], 20, 10, false, false);
const rahamut = new Summon("Rahamut", "", 800, 30, 0.25, 3, 0, [], 9, 4, false, false);
const kuja = new Summon("Kuja", "", 760, 100, 0.15, 2, 0, [], 9, 6, false, false);
const fenix = new Summon("Fénix", "", 900, 60, 0.10, 1, 0, [], 18, 4, false, false);
const lcdlmr = new Summon("Los Caballeros de La Mesa Redonda", "", 1300, 130, 0.72, 2, 0, [], 13, 7, false, false);
const anima = new Summon("Ánima", "", 400, 25, 0.05, 1, 0, [], 6, 3, false, false);
const jades = new Summon("Jades", "", 850, 64, 0.23, 2, 0, [], 10, 4, false, false);
const cactus = new Summon("Cactus", "", 600, 30, 0.07, 2, 0, [], 5, 3, false, false);
const meteoro = new Summon("Meteoro", "", 1030, 90, 0.7, 1, 0, [], 17, 2, false, false);
const malvoro = new Summon("Malvoro", "", 700, 70, 0.08, 2, 0, [], 7, 3, false, false);

// WEAPON DEFINITIONS
// NOTE: Change the cCost
// Structure: Name, Desc; Ability, Ability Desc; Health, Attack Base, Deffense Base, Attack List, Placing Cost, Changing Cost, cCost Show, Is on battle
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
