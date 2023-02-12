import { TestBed } from '@angular/core/testing';

import { FetchAdsService } from './fetch-ads.service';

describe('FetchAdsService', () => {
  let service: FetchAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
