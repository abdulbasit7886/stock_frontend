import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktitleComponent } from './stocktitle.component';

describe('StocktitleComponent', () => {
  let component: StocktitleComponent;
  let fixture: ComponentFixture<StocktitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocktitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocktitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
