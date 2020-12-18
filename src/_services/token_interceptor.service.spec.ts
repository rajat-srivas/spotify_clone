/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Token_interceptorService } from './token_interceptor.service';

describe('Service: Token_interceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Token_interceptorService]
    });
  });

  it('should ...', inject([Token_interceptorService], (service: Token_interceptorService) => {
    expect(service).toBeTruthy();
  }));
});
