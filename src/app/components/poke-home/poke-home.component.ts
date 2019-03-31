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

  /**
   * @description this function navigates the user to appropriate screen;
   * @param event contains value that defines where should the user navigate to
   */
  navigateTo(event) {
    if (event === 'all') {
      this.router.navigate(['all']);
    } else if (event === 'new') {
      this.router.navigate(['add']);
    }
  }

}
