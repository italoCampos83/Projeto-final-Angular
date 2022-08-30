/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VeiculosDadosService } from './veiculos-dados.service';

describe('Service: VeiculosDados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculosDadosService]
    });
  });

  it('should ...', inject([VeiculosDadosService], (service: VeiculosDadosService) => {
    expect(service).toBeTruthy();
  }));
});
