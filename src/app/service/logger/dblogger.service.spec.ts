import { TestBed, inject } from '@angular/core/testing';

import { DbloggerService } from './dblogger.service';

describe('DbloggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbloggerService]
    });
  });

  it('should be created', inject([DbloggerService], (service: DbloggerService) => {
    expect(service).toBeTruthy();
  }));
});
