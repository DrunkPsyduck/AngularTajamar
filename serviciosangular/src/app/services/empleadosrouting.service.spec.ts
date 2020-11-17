import { TestBed } from '@angular/core/testing';

import { EmpleadosroutingService } from './empleadosrouting.service';

describe('EmpleadosroutingService', () => {
  let service: EmpleadosroutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadosroutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
