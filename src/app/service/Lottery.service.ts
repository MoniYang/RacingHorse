import { Injectable } from '@angular/core';

import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';
import { UtilsService } from './helper/UtilsService.service';

@Injectable({
  providedIn: 'root',
})
export class LotteryService {
  constructor(
    private repositoryHelper: RepositoryHelper,
    private utilsService: UtilsService
  ) {}

  AddPlayerList(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/MPlayer/AddMPlayerList';
    ajaxData['RebatePro'] = dataObj.RebatePro;
    ajaxData['RebateProMoney'] = dataObj.RebateProMoney;
    ajaxData['LotteryTypeID'] = dataObj.LotteryTypeID;
    ajaxData['MPlayerList'] = dataObj.MPlayerList;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindMPlayer(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/MPlayer/FindMPlayer';
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['LotteryTypeID'] = dataObj.LotteryTypeID;
    ajaxData['CurrentPeriod'] = dataObj.CurrentPeriod;
    ajaxData['DateS'] = this.utilsService.getDateS(new Date());
    ajaxData['DateE'] = this.utilsService.getDateE(new Date());

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryTypeByFront(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindLotteryTypeByFront';
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['LotteryTypeID'] = dataObj.LotteryTypeID;
    ajaxData['LotteryTypeCode'] = dataObj.LotteryTypeCode;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryTypeLobby(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindLotteryTypeLobby';
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryClassLobby(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindLotteryClassLobby';
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['LotteryTypeCode'] = dataObj.LotteryTypeCode;
    ajaxData['Status'] = dataObj.Status;
    ajaxData['LotteryType_TableID'] = dataObj.LotteryType_TableID;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryClassByFront(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindLotteryClassByFront';
		ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['DateS'] = dataObj.DateS;
    ajaxData['DateE'] = dataObj.DateE;
    ajaxData['Status'] = dataObj.Status;
    ajaxData['GameRoomID'] = dataObj.GameRoomID;
    return this.repositoryHelper.Post(ajaxData);
  }

  FindLotteryClass(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/Lottery/FindLotteryClass';
		ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['DateS'] = dataObj.DateS;
    ajaxData['DateE'] = dataObj.DateE;
    ajaxData['Status'] = dataObj.Status;
    ajaxData['GameRoomID'] = dataObj.GameRoomID;

    return this.repositoryHelper.Post(ajaxData);
  }
}
