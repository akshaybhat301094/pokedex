import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { Router } from '@angular/router';
import { PokeModel } from 'src/app/models/poke-data.model';

@Component({
  selector: 'app-poke-name',
  templateUrl: './poke-name.component.html',
  styleUrls: ['./poke-name.component.scss']
})
export class PokeNameComponent implements OnInit {

  public pokeData: Array<PokeModel> = new Array<PokeModel>();

  constructor(private pokeService: PokeDataService,
    private router: Router
    ) { }

  ngOnInit() {
    const pokeData = this.pokeService.getPokemon();
    pokeData.forEach(data => {
      const tempData = new PokeModel(data);
      this.pokeData.push(tempData);
    });
  }

  /**
   * @description function used to set the selected pokemon and navigate to details view
   * @param pokemon contains the details of selected pokemon
   */
  getSelectedPokemon(pokemon) {
    this.pokeService.setCurrentPokemon(pokemon);
    this.router.navigate(['details', pokemon.id]);
  }

}
