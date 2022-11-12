import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalserviceComponent } from './normalservice.component';

describe('NormalserviceComponent', () => {
  let component: NormalserviceComponent;
  let fixture: ComponentFixture<NormalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NormalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
