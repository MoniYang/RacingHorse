/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignalRHelperService } from './SignalRHelper.service';

describe('Service: SignalRHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalRHelperService]
    });
  });

  it('should ...', inject([SignalRHelperService], (service: SignalRHelperService) => {
    expect(service).toBeTruthy();
  }));
});
