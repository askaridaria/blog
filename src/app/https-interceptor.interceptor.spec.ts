import { TestBed } from '@angular/core/testing';

import { HttpsInterceptorInterceptor } from './https-interceptor.interceptor';

describe('HttpsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpsInterceptorInterceptor = TestBed.inject(HttpsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
