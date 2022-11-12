import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickserviceComponent } from './quickservice.component';

describe('QuickserviceComponent', () => {
  let component: QuickserviceComponent;
  let fixture: ComponentFixture<QuickserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
