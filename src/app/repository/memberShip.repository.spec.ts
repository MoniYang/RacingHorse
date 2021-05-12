/* tslint:disable:no-unused-variable */
import { inject, TestBed } from '@angular/core/testing';

import { MembershipRepository } from './Membership.repository';

describe('Service: RepositoryHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembershipRepository],
    });
  });

  it('should ...', inject(
    [MembershipRepository],
    (service: MembershipRepository) => {
      expect(service).toBeTruthy();
    }
  ));
});
