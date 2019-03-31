import { Injectable } from '@angular/core';
import { PokeData } from './poke-data';
import { PokeModel } from './models/poke-data.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  public currentPokemon: PokeModel;

  constructor(private router: Router) {}

  /**
   * @description function used as a getter for pokemon data
   */
  getPokemon() {
    return PokeData;
  }

  /**
   * @description function used to set the current pokemon for view
   * @param pokemon contains selected pokemon details
   */
  setCurrentPokemon(pokemon) {
    this.currentPokemon = new PokeModel(pokemon);
  }

  /**
   * @description used to update the value of the selected pokemon
   * @param pokemon contains selected pokemon details
   */
  updatePokemon(pokemon) {
    const tempPoke = PokeData.find((poke) => {
      return poke.id === pokemon.id;
    });
    const index = PokeData.indexOf(tempPoke);
    PokeData[index] = pokemon;
  }

  /**
   * @description function used to create a new pokemon
   * @param data contains details of new pokemon
   * @param type contains the type of new pokemon
   */
  createNewPokemon(data, type) {
    const tempPokeObj = {
      'id': PokeData.length + 1,
      'name': {
        'english': data['pokemonName'],
        'japanese': data['pokemonName'],
        'chinese': data['pokemonName']
      },
      'type': type,
      'base': {
        'HP': 0,
        'Attack': data['attackLevel'],
        'Defense': data['defenseLevel'],
        'Sp. Attack': 0,
        'Sp. Defense': 0,
        'Speed': 0
      }
    };
    PokeData.push(tempPokeObj);

    this.currentPokemon = new PokeModel(tempPokeObj);
    this.router.navigate(['details', this.currentPokemon.id]);
  }
}
