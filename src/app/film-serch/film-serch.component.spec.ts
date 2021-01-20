import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmSerchComponent } from './film-serch.component';

describe('FilmSerchComponent', () => {
  let component: FilmSerchComponent;
  let fixture: ComponentFixture<FilmSerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmSerchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmSerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
