import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateFilmComponent } from './crate-film.component';

describe('CrateFilmComponent', () => {
  let component: CrateFilmComponent;
  let fixture: ComponentFixture<CrateFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateFilmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrateFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
