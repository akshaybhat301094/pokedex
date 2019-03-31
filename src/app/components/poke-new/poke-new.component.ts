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

  addNewPokemon(pokemon) {
   this.pokeService.createNewPokemon(pokemon, this.typeOfPokemon);
  }

  addType(type) {
    if (type !== '' && type !== undefined) {
      this.typeOfPokemon.push(type);
      this.currentPokeType = '';
    }
  }

  removeType(index) {
    if (this.typeOfPokemon.length > 0) {
      this.typeOfPokemon.splice(index, 1);
    }
  }

}
