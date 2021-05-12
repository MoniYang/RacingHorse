/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LotteryBettingHistoryService } from './LotteryBettingHistory.service';

describe('Service: LotteryBettingHistory', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LotteryBettingHistoryService]
    });
  });

  it('should ...', inject([LotteryBettingHistoryService], (service: LotteryBettingHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
