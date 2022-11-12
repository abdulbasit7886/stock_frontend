import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupadmindashboardComponent } from './supadmindashboard.component';

describe('SupadmindashboardComponent', () => {
  let component: SupadmindashboardComponent;
  let fixture: ComponentFixture<SupadmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupadmindashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupadmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
