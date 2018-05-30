import { TestBed, inject } from '@angular/core/testing';

import { PedidoServicioService } from './pedido-servicio.service';

describe('PedidoServicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoServicioService]
    });
  });

  it('should be created', inject([PedidoServicioService], (service: PedidoServicioService) => {
    expect(service).toBeTruthy();
  }));
});
