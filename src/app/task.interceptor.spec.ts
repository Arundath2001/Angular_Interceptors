import { TestBed } from '@angular/core/testing';

import { TaskInterceptor } from './task.interceptor';

describe('TaskInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TaskInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TaskInterceptor = TestBed.inject(TaskInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
