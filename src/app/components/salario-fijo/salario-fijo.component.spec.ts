import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioFijoComponent } from './salario-fijo.component';

describe('SalarioFijoComponent', () => {
  let component: SalarioFijoComponent;
  let fixture: ComponentFixture<SalarioFijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarioFijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalarioFijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
