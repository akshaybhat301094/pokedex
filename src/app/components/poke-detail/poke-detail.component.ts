import { Component, OnInit } from '@angular/core';
import { PokeDataService } from 'src/app/poke-data.service';
import { PokeModel } from 'src/app/models/poke-data.model';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  isEditMode = false;
  public pokemonList: Array<PokeModel> = new Array<PokeModel>();

  public selectedPokemon: PokeModel;
  public typeOfPokemon = '';

  constructor(private pokeService: PokeDataService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const pokeData = this.pokeService.getPokemon();
    pokeData.forEach(data => {
      const tempData = new PokeModel(data);
      this.pokemonList.push(tempData);
    });
    this.route.url.subscribe((data) => {
      const index = parseInt(data[1].path, 10);
      this.selectedPokemon = this.pokemonList[index - 1];
    });
  }

  editData() {
    this.isEditMode = !this.isEditMode;
  }

  submitData(event) {
    this.pokeService.updatePokemon(this.selectedPokemon);
    this.isEditMode = false;
  }

  addType(type) {
    if (type !== '' && type !== undefined) {
      this.selectedPokemon.type.push(type);
      this.typeOfPokemon = '';
    }
  }

  removeType(type) {
    const selectedType = this.selectedPokemon.type.indexOf(type);
    if (this.selectedPokemon.type.length > 0) {
      this.selectedPokemon.type.splice(selectedType, 1);
    }
  }

}
