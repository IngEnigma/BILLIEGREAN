import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaGastosComponent } from './grafica-gastos.component';

describe('GraficaGastosComponent', () => {
  let component: GraficaGastosComponent;
  let fixture: ComponentFixture<GraficaGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaGastosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
