import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-home',
  templateUrl: './poke-home.component.html',
  styleUrls: ['./poke-home.component.scss']
})
export class PokeHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(event) {
    if (event === 'all') {
      this.router.navigate(['all']);
    } else if (event === 'new') {
      this.router.navigate(['add']);
    }
  }

}
