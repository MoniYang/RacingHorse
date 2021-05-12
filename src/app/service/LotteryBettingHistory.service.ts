import { Injectable } from '@angular/core';

import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';
import { UtilsService } from './helper/UtilsService.service';

@Injectable({
  providedIn: 'root',
})
export class LotteryBettingHistoryService {
  constructor(
    private repositoryHelper: RepositoryHelper,
    private utilsService: UtilsService
  ) {}

  FindLotteryHistoryByRange(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/LotteryInfo/FindLotteryHistoryByRange';
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['DateS'] = this.utilsService.getDateS(userDataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(userDataObj.DateE);
    ajaxData['LotteryTypeIDs'] = userDataObj.LotteryTypeIDs;
    ajaxData['CurrentPeriod'] = userDataObj.CurrentPeriod;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryHistoryByNearTen(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/LotteryInfo/FindLotteryHistoryByNearTen';
    ajaxData['LotteryTypeIDs'] = userDataObj.LotteryTypeIDs;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryHistoryByNearHundred(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/LotteryInfo/FindLotteryHistoryByNearHundred';
    ajaxData['LotteryTypeIDs'] = userDataObj.LotteryTypeIDs;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindOLotteryHistoryByRoom(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindOLotteryHistoryByRoom';
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['LotteryTypeID'] = userDataObj.LotteryTypeID;
    ajaxData['RoomID'] = userDataObj.RoomID;
    ajaxData['IsVip'] = userDataObj.IsVip;
    ajaxData['DateS'] = this.utilsService.getDateS(userDataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(userDataObj.DateE);

    return this.repositoryHelper.Post(ajaxData);
  }

  FindMPlayer(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/MPlayer/FindMPlayer';
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['LotteryTypeID'] = userDataObj.LotteryTypeID;
    ajaxData['CurrentPeriod'] = userDataObj.CurrentPeriod;
    ajaxData['DateS'] = this.utilsService.getDateS(userDataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(userDataObj.DateE);

    return this.repositoryHelper.Post(ajaxData);
  }

  FindVwMPlayer(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/MPlayer/FindVwMPlayer';
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['LotteryTypeIDs'] = userDataObj.LotteryTypeIDs;
    ajaxData['StatusCode'] = userDataObj.StatusCode;
    ajaxData['DateS'] = this.utilsService.getDateS(userDataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(userDataObj.DateE);

    return this.repositoryHelper.Post(ajaxData);
  }

  FindWinLoseReportByFront(userDataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/MPlayerReport/FindWinLoseReportByFront';
    ajaxData['LotteryTypeIDs'] = userDataObj.LotteryTypeIDs;
    ajaxData['StatusCode'] = userDataObj.StatusCode;
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['DateS'] = this.utilsService.getDateS(userDataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(userDataObj.DateE);

    return this.repositoryHelper.Post(ajaxData);
  }
}
