import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaempleadoComponent } from './tablaempleado.component';

describe('TablaempleadoComponent', () => {
  let component: TablaempleadoComponent;
  let fixture: ComponentFixture<TablaempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaempleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
