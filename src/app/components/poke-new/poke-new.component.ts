import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-new',
  templateUrl: './poke-new.component.html',
  styleUrls: ['./poke-new.component.scss']
})
export class PokeNewComponent implements OnInit {

  public typeOfPokemon = ['grass', 'fire'];
  public currentPokeType = '';
  public fieldName = 'Description';
  public fieldValue = 'This is a wild pokemon.';

  constructor(private pokeService: PokeDataService) { }

  ngOnInit() {
  }

  /**
   * @description function used to add the details of the new pokemon
   * @param pokemon contains the details of the new pokemon
   */
  addNewPokemon(pokemon) {
   this.pokeService.createNewPokemon(pokemon, this.typeOfPokemon);
  }

  /**
   * @description function used to update the user entered type of pokemon
   * @param type contains the user entered type of pokemon
   */
  addType(type) {
    if (type !== '' && type !== undefined) {
      this.typeOfPokemon.push(type);
      this.currentPokeType = '';
    }
  }

  /**
   * @description function used to remove the selected pokemon.
   * @param index contains the index of selected type of pokemon
   */
  removeType(index) {
    if (this.typeOfPokemon.length > 0) {
      this.typeOfPokemon.splice(index, 1);
    }
  }

}
