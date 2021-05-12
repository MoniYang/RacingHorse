/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MWalletService } from './MWallet.service';

describe('Service: MWallet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MWalletService]
    });
  });

  it('should ...', inject([MWalletService], (service: MWalletService) => {
    expect(service).toBeTruthy();
  }));
});
