import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryTypeComponent } from './salary-type.component';

describe('SalaryTypeComponent', () => {
  let component: SalaryTypeComponent;
  let fixture: ComponentFixture<SalaryTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaryTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
