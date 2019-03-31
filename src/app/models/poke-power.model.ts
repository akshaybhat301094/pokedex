export class PokePowerModel {
    hp: number;
    attack: number;
    defense: number;
    spAttack: number;
    spDefence: number;
    speed: number;

    constructor(power) {
        this.hp = power.HP ? power.HP : power.hp;
        this.attack = power.Attack ? power.Attack : power.attack;
        this.defense = power.Defense ? power.Defense : power.defense;
        this.spAttack = power['Sp. Attack'] ? power['Sp. Attack'] : power.spAttack;
        this.spDefence = power['Sp. Defense'] ? power['Sp. Defense'] : power.spDefence;
        this.speed = power.Speed ? power.Speed : power.speed;
    }
}
