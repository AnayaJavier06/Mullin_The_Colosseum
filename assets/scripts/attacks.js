class Spell {
    constructor(name, desc, modS, modC, cooldownS, cooldownC, duration) {
        this.name = name;
        this.desc = desc;
        this.modS = modS;
        this.modC = modC;
        this.cooldownS = cooldownS;
        this.cooldownC = cooldownC;
    }
}

// NOTE: Change the cooldowns
// Structure: Name, Desc; Modifier (Summon/Weapon), Modifier (Char.), Cooldown (Summon/Weapon), Cooldown (Char.), Duration
const barrier = new Spell("Barrera", "", 115, 215, 0, 0);
const berserk = new Spell("Berserk", "", 1.5, 1.5, 0, 0);
const bioI = new Spell("Bio I", "", 0.625, 8, 0, 0);
const bioII = new Spell("Bio II", "", 1.3125, 36, 0, 0);
const bioIII = new Spell("Bio III", "", 4.25, 80, 0, 0);
const breack = new Spell("Break", "", 6.25, 86, 0, 0);
const cometI = new Spell("Cometa I", "", 5, 70, 0, 0);
const cometII = new Spell("Cometa II", "", 7.5, 110, 0, 1);
const become = new Spell("Conv. en Taza", "", 0.3, 0.3, 0, 0);
const cureI = new Spell("Cura I", "", 0.25, 0.25, 0, 0);
const cureII = new Spell("Cura II", "", 0.5, 0.5, 0, 0);
const cureIII = new Spell("Cura III", "", 0.75, 0.75, 0, 0);
const death = new Spell("Muerte", "", 0, 0, 0, 0);
const deBarrier = new Spell("Anti-Barrera", "", 0, 0, 0, 0);
const demiI = new Spell("Demi I", "", 0.25, 14, 0, 0);
const demiII = new Spell("Demi II", "", 0.5, 33, 0, 0);
const demiIII = new Spell("Demi II", "", 0.75, 48, 0, 0);
const deSpell = new Spell("Anti-Hechizo", "", 0, 0, 0, 0);
const gPound = new Spell("Sentón", "", true, true, 0, 0);
const ePatrum = new Spell("Expecto Patronum", "", 362, 362, 0, 0);
const fireI = new Spell("Fuego I", "", 0.5, 4, 0, 0);
const fireII = new Spell("Fuego II", "", 1.25, 22, 0, 0);
const fireIII = new Spell("Fuego III", "", 4, 52, 0, 0);
const flare = new Spell("Llamarada", "", 7.1875, 100, 0, 0);
const freeze = new Spell("Congelar", "", 5.4375, 82, 0, 0);
const fCure = new Spell("Cura Total", "", 0, 0, 0, 0);
const haste = new Spell("Prisa", "", 321, 321, 0, 0);
const iceI = new Spell("Hielo I", "", 0.5, 4, 0, 0);
const iceII = new Spell("Hielo II", "", 1.25, 22, 0, 0);
const iceIII = new Spell("Hielo III", "", 4, 52, 0, 0);
const lifeI = new Spell("Vida I", "", 0.5, 0.5, 0, 0);
const lifeII = new Spell("Vida II", "", 1, 1, 0, 0);
const mBarrier = new Spell("Barrera Mágica", "", 125, 225, 0, 0);
const mini = new Spell("Mini", "", 312, 312, 0, 0);
const wLeviosa = new Spell("Wingardium Leviosa", "", true, true, 0, 0);
const quakeI = new Spell("Terremoto I", "", 0.6875, 6, 0, 0);
const quakeII = new Spell("Terremoto II", "", 1.5, 28, 0, 0);
const quakeIII = new Spell("Terremoto III", "", 4.375, 68, 0, 0);
const reflect = new Spell("Reflejo", "", 135, 235, 0, 0);
const regen = new Spell("Regenerar", "", 342, 342, 0, 0);
const remove = new Spell("Eliminar", "", false, false, 0, 0);
const resist = new Spell("Resistir", "", 195, 295, 0, 0);
const shield = new Spell("Escudo", "", 143, 243, 0, 0);
const silence = new Spell("Silencio", "", 0, 0, 0, 0); // 2
const sleepel = new Spell("Sueño", "", 0.05, 0.25, 0, 0);
const slow = new Spell("Lento", "", 331, 331, 0, 0);
const stop = new Spell("Detener", "", 171, 271, 0, 0)
const toad = new Spell("Sapo", "", true, true, 0, 0);
const tornado = new Spell("Tornado", "", 6.5625, 90, 0, 0);
const ultima = new Spell("Ultima", "", 6.5625, 130, 0, 0);
const wall = new Spell("Muro", "", 155, 255, 0, 0);


// NOTE: CHECK IF THIS WORKS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// GENERAL ACTIONS
function aSmn(type, damage) {
    if (type === 2 || type === 5) {
        return damage * 0.5;
    } else if (type === 3) {
        this.hp -= damage;
        return damage = 0;
    } else if (type === 4) {
        // ATTACK BLOCKED
        console.log("ATTACK BLOCKED!");
        return damage = 0;
    }
}

function attack(eTurn, eHP, eShield, atkB, mod) {
    sType = eShield.slice(0, 2);
    tLeft = eShield.at(-1);
    damage = atkB * mod;

    if (sType[0] === 1 || sType[0] === 2) {
        if (sType.at(-1) === 4) {
            // ATTACK BLOCKED
            console.log("ATTACK BLOCKED!");
            damage = 0;
        } else if (sType.at(-1) === 3) {
            this.hp -= damage;
            damage = 0;
        } else if (
            (sType[0] === 1 && sType.at(-1) === 1) || 
            (sType[0] === 2 && sType.at(-1) === 2) || 
            sType.at(-1) === 5) {
            damage *= 0.5;
        }

        --eShield;
    }

    eHP -= damage;

    if (this.shield.slice(0, 2) !== 36) --this.shield;
    if (this.shield.at(-1) === 0) {
        eTurn = true;
    }
}

function heal(hp, mod) {
    hp += hp*mod;
}

function shield(shield, mod) {
    shield = mod;
}

// ACTION ASSIGNATION
// barrier.action = ;
// berserk.action = ;
bioI.action = attack;
bioII.action = attack;
bioIII.action = attack;
breack.action = attack;
cometI.action = attack;
cometII.action = attack;
// become.action = ;
cureI.action = heal;
cureII.action = heal;
cureIII.action = heal;
// death.action = ;
// deBarrier.action = ;
demiI.action = attack;
demiII.action = attack;
demiIII.action = attack;
// deSpell.action = ;
// gPound.action = ;
// ePatrum.action = ;
fireI.action = attack;
fireII.action = attack;
fireIII.action = attack;
flare.action = attack;
freeze.action = attack;
// fCure.action = ;
// haste.action = ;
iceI.action = attack;
iceII.action = attack;
iceIII.action = attack;
// lifeI.action = ;
// lifeII.action = ;
// mBarrier.action = ;
// mini.action = ;
// wLeviosa.action = ;
quakeI.action = attack;
quakeII.action = attack;
quakeIII.action = attack;
// reflect.action = ;
regen.action = heal;
// remove.action = ;
// resist.action = ;
// shield.action = ;
// silence.action = ;
// sleepel.action = ;
// slow.action = ;
// toad.action = ;
tornado.action = attack;
ultima.action = attack;
// wall.action = ;

