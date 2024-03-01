import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPlanSortingComponent } from './internet-plan-sorting.component';

describe('InternetPlanSortingComponent', () => {
  let component: InternetPlanSortingComponent;
  let fixture: ComponentFixture<InternetPlanSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetPlanSortingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetPlanSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
