import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGastosComponent } from './lista-gastos.component';

describe('ListaGastosComponent', () => {
  let component: ListaGastosComponent;
  let fixture: ComponentFixture<ListaGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGastosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
