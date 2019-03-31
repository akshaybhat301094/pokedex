import { PokeLanguageModel } from './poke-language.model';
import { PokePowerModel } from './poke-power.model';

export class PokeModel {
    id: number;
    name: PokeLanguageModel;
    type: Array<string> = new Array<string>();
    base: PokePowerModel;

    constructor(pokemon) {
        this.id = pokemon.id;
        this.name = new PokeLanguageModel(pokemon.name);
        pokemon.type.forEach(type => {
            this.type.push(type);
        });
        this.base = new PokePowerModel(pokemon.base);
    }
}
