import { TestBed } from '@angular/core/testing';

import { ContactCreatorService } from './contact-creator.service';

describe('ContactCreatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactCreatorService = TestBed.get(ContactCreatorService);
    expect(service).toBeTruthy();
  });
});
