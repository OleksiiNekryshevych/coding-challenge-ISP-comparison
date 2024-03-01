import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetPlanesListComponent } from './internet-planes-list.component';

describe('InternetPlanesListComponent', () => {
  let component: InternetPlanesListComponent;
  let fixture: ComponentFixture<InternetPlanesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternetPlanesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternetPlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
