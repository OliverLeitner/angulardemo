import { TestBed } from '@angular/core/testing';

import { AniquotesService } from './aniquotes.service';

describe('AniquotesService', () => {
  let service: AniquotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniquotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
