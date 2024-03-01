import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPlanComponent } from './internet-plan.component';

describe('InternetPlanComponent', () => {
  let component: InternetPlanComponent;
  let fixture: ComponentFixture<InternetPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetPlanComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
