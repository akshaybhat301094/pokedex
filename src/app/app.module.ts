import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PokeNameComponent } from './components/poke-name/poke-name.component';
import { PokeDetailComponent } from './components/poke-detail/poke-detail.component';
import { PokeHomeComponent } from './components/poke-home/poke-home.component';
import { PokeNewComponent } from './components/poke-new/poke-new.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PokeNameComponent,
    PokeDetailComponent,
    PokeHomeComponent,
    PokeNewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
