import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNewComponent } from './poke-new.component';

describe('PokeNewComponent', () => {
  let component: PokeNewComponent;
  let fixture: ComponentFixture<PokeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
