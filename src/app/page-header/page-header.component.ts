import { Component, OnInit } from '@angular/core';
import { PokeDataService } from '../poke-data.service';
import { PokeModel } from '../models/poke-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  public pokemonList: Array<PokeModel> = new Array<PokeModel>();
  public searchText = '';

  constructor(private pokeService: PokeDataService, private router: Router) { }

  ngOnInit() {
    const pokeData = this.pokeService.getPokemon();
    pokeData.forEach(data => {
      const tempData = new PokeModel(data);
      this.pokemonList.push(tempData);
    });
  }

  /**
   * @description function used to select navigate to the appropriate pokemon view from dropdown.
   * @param pokemon contains the details of the selected value in dropdown
   */
  selectPokemon(pokemon) {
    this.pokeService.currentPokemon = pokemon;
    this.searchText = '';
    this.router.navigate(['details', pokemon.id]);
  }

}
