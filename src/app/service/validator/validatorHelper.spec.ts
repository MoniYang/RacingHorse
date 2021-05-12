/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { validatorHelper } from './validatorHelper';


describe('Service: ValidatorHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [validatorHelper],
    });
  });

  it('should ...', inject([validatorHelper], (service: validatorHelper) => {
    expect(service).toBeTruthy();
  }));
});
