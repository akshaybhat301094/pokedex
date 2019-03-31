import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNameComponent } from './poke-name.component';

describe('PokeNameComponent', () => {
  let component: PokeNameComponent;
  let fixture: ComponentFixture<PokeNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
