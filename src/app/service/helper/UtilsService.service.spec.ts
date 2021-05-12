/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { UtilsService } from './UtilsService.service';


describe('Service: UtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService],
    });
  });

  it('should ...', inject([UtilsService], (service: UtilsService) => {
    expect(service).toBeTruthy();
  }));
});
