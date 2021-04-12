import { TestBed } from '@angular/core/testing';

import { MedImageService } from './med-image.service';

describe('MedImageService', () => {
  let service: MedImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
