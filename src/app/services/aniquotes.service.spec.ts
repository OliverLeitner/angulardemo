import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AniquotesService } from './aniquotes.service';

describe('AniquotesService', () => {
  let service: AniquotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(AniquotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
