import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasmultiplicarComponent } from './tablasmultiplicar.component';

describe('TablasmultiplicarComponent', () => {
  let component: TablasmultiplicarComponent;
  let fixture: ComponentFixture<TablasmultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasmultiplicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasmultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
