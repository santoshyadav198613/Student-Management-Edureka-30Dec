import { TestBed, inject } from '@angular/core/testing';

import { ApiinterceptorService } from './apiinterceptor.service';

describe('ApiinterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiinterceptorService]
    });
  });

  it('should be created', inject([ApiinterceptorService], (service: ApiinterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
