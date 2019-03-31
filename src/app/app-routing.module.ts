import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeNameComponent } from './components/poke-name/poke-name.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeNewComponent } from './components/poke-new/poke-new.component';

const routes: Routes = [
  {path: '', component: PokeHomeComponent},
  {path: 'home', component: PokeHomeComponent},
  {path: 'all', component: PokeNameComponent},
  {path: 'details/:id', component: PokeDetailComponent},
  {path: 'add', component: PokeNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
