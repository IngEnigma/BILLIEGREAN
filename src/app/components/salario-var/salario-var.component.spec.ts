import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioVarComponent } from './salario-var.component';

describe('SalarioVarComponent', () => {
  let component: SalarioVarComponent;
  let fixture: ComponentFixture<SalarioVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarioVarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalarioVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
