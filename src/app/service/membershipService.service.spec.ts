/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { MembershipService } from './membershipService.service';


describe('Service: MembershipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembershipService],
    });
  });

  it('should ...', inject([MembershipService], (service: MembershipService) => {
    expect(service).toBeTruthy();
  }));
});
