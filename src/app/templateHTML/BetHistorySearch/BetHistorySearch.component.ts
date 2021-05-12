import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { data } from 'jquery';

import { LanguageService } from '../../common/Language/language.service';
import { LotteryBettingHistoryService } from '../../service/LotteryBettingHistory.service';
import { UtilsService } from './../../service/helper/UtilsService.service';

@Component({
  selector: 'app-BetHistorySearch',
  templateUrl: './BetHistorySearch.component.html',
  styleUrls: ['./BetHistorySearch.component.css'],
})
export class BetHistorySearchComponent implements OnInit {
  constructor(
    private localStorage: LocalStorage,
    private lotteryBettingHistoryService: LotteryBettingHistoryService,
    private utilsService: UtilsService,
    public languageService: LanguageService
  ) {}

  dataSource = {
    openStatus: [
      { text: 'All', values: 0 },
      { text: 'Opened', values: 1 },
      { text: 'Pending', values: 2 },
    ],
    selectedLotteryClass: [
      {
        LotteryClassID: -1,
        LotteryClassName: '--Game Class--',
        lotteryTypes: [],
      },
      { LotteryClassID: 0, LotteryClassName: 'All', lotteryTypes: [] },
    ],
    selectedLotteryType: [
      { LotteryTypeID: -1, LotteryTypeCode: '--Game Type--' },
      { LotteryTypeID: 0, LotteryTypeCode: 'All' },
    ],
    searchCondition: {
      StatusCode: 0,
      LotteryTypeID: 0,
      dateS: this.utilsService.formatDate(new Date(), false),
      dateE: this.utilsService.formatDate(new Date(), false),
    },
    SelectLotteryClass: {
      LotteryClassID: -1,
      LotteryClassName: '--Game Class--',
      lotteryTypes: [],
    },
    SelectLotteryType: { LotteryTypeID: -1, LotteryTypeCode: '--Game Type--' },
    mPlayerDetail: {
      indexNo: 1,
      BetAmount: 0,
      CurrentPeriod: 0,
      LotteryInfoName: null,
      LotteryTypeName: '',
      OpenTime: new Date(),
      WinLose: 1,
      oLottery: {
        CloseTime: '',
        CreateDate: '',
        CreateID: 0,
        CurrentLotteryTime: '',
        CurrentPeriod: '',
        DiceEvenOdd: null,
        DiceSmallBig: null,
        EndPlayTime: '',
        FunctionName: '',
        ID: 689,
        IsOpen: true,
        IsOpenGo: false,
        LotteryTypeID: 1,
        OpenLotteryDatas: [],
        Result: '',
        ResultList: [],
        ResultNotice: null,
        RoomID: '',
        RoomSetID: 1,
        Round: 0,
        Statistics: [],
        Sum: 0,
        UpdateDate: '',
        UpdateID: 0,
        UserDataCache: null,
        lotteryPlayResult: null,
      },
      vwMPlayers: [
        {
          BankerID:0,
          CashBackRebatePayType: 34,
          CashRebatePayType: 34,
          CompanyID: 0,
          CreateDate: '',
          CreateID: 6027,
          CurrentLotteryTime: '',
          CurrentPeriod: '',
          DiscountPrice: '',
          ID: 1434,
          IsAfter: false,
          IsCashBackWriteReport: false,
          IsCashRebateWriteReport: false,
          IsCredit: false,
          IsReferralWriteReport: false,
          IsWin: false,
          IsWinStop: false,
          LotteryClassID: 1,
          LotteryInfoID: 14,
          LotteryInfoName: '',
          LotteryTypeCode: '',
          LotteryTypeID: 1,
          LotteryTypeName: '',
          ManualBet: null,
          MemberID: 6027,
          Multiple: null,
          Price: '',
          Qty: '',
          RebatePro: '',
          RebateProMoney: '',
          ReferralPayType: 34,
          Result: '',
          ResultList: [],
          RoomID: '',
          SelectedNums: '',
          SelectedTxt: '',
          UpdateDate: '',
          UpdateID: 0,
          WinMoney: '',
        },
      ],
    },
    mPlayerObj: [
      // {
      //   indexNo: 1,
      //   BetAmount: 0,
      //   CurrentPeriod: 0,
      //   LotteryInfoName: null,
      //   LotteryTypeName: '',
      //   OpenTime: new Date(),
      //   WinLose: 1,
      //   CashRebateMoney: 0,
      //   IsBanker: false,
      //   oLottery: {},
      //   vwMPlayers: [],
      // },
    ],
    PagerObj: {
      CurrentPage: 1,
      PageSize: 10,
      PageSizeArray: [1, 5, 10, 20],
      TotalItems: 0,
      TotalPage: 0,
      PageArray: [1],
      PageRangeMax: 2,
      PageRangeMin: 1,
      thisPage: 1,
    },
  };

  ngOnInit() {
    this.FindLotteryClass();
  }

  FindBetHistory() {
    let lotteryTypeIDs = [];
    if (
      this.dataSource.SelectLotteryType &&
      this.dataSource.SelectLotteryType.LotteryTypeID > 0
    ) {
      lotteryTypeIDs.push(this.dataSource.SelectLotteryType.LotteryTypeID);
    } else {
      this.dataSource.SelectLotteryClass.lotteryTypes.forEach((p) => {
        if (p.LotteryTypeID) {
          lotteryTypeIDs.push(p.LotteryTypeID);
        }
      });
    }
    let ajaxData = {};
    ajaxData['CurrentPage'] = this.dataSource.PagerObj.CurrentPage;
    ajaxData['PageSize'] = this.dataSource.PagerObj.PageSize;
    ajaxData['LotteryTypeIDs'] = lotteryTypeIDs;
    ajaxData['StatusCode'] = this.dataSource.searchCondition.StatusCode;
    ajaxData['DateS'] = new Date(this.dataSource.searchCondition.dateS);
    ajaxData['DateE'] = new Date(this.dataSource.searchCondition.dateE);

    this.lotteryBettingHistoryService
      .FindWinLoseReportByFront(ajaxData)
      .subscribe(
        (response) => {
          if (response.APIRes.ResCode === '000') {
            for (var i = 0; i < response.Rows.ListData.length; i++) {
              response.Rows.ListData[i].indexNo = i;
              response.Rows.ListData[i].WinLose = parseFloat(
                response.Rows.ListData[i].WinLose
              );
              response.Rows.ListData[i].BetAmount = parseFloat(
                response.Rows.ListData[i].BetAmount
              );
              response.Rows.ListData[i].CashRebateMoney = parseFloat(
                response.Rows.ListData[i].CashRebateMoney
              );
            }
            this.dataSource.mPlayerObj = response.Rows.ListData;
            response.Rows.PagerObj['PageSizeArray'] = [1, 5, 10, 20];
            this.dataSource.PagerObj = this.utilsService.calculatorPageObj(
              response.Rows.PagerObj
            );
            console.log(this.dataSource.PagerObj);
          }
          return response;
        },
        (error) => {
          console.log('Error happened' + error);
        }
      );
  }

  // 無API方法
  ChangePage(currentPage) {
    let callFindBetHistory = false;
    if (currentPage && currentPage != this.dataSource.PagerObj.CurrentPage) {
      this.dataSource.PagerObj.CurrentPage = currentPage;
      callFindBetHistory = true;
    }

    if (callFindBetHistory) {
      this.FindBetHistory();
    }
  }

  ChangePageSize() {
    this.FindBetHistory();
  }

  FindLotteryClass() {
    const tmpData = JSON.parse(localStorage.getItem('LotteryClass'));

    tmpData.forEach((data) => {
      let lotteryClassData = {
        LotteryClassID: data.LotteryClassID,
        LotteryClassName: data.LotteryClassName,
        lotteryTypes: data.lotteryTypes,
      };
      this.dataSource.selectedLotteryClass.push(lotteryClassData);
      this.dataSource.selectedLotteryClass.filter((x) => {
        if (x.LotteryClassID == 0) {
          data.lotteryTypes.forEach((lotteryTypeData) => {
            x.lotteryTypes.push(lotteryTypeData);
          });
        }
      });
    });
    this.dataSource.SelectLotteryClass = this.dataSource.selectedLotteryClass[1];
  }

  SelectLotteryClass() {
    this.dataSource.selectedLotteryType = [
      { LotteryTypeID: -1, LotteryTypeCode: '--Game Type--' },
      { LotteryTypeID: 0, LotteryTypeCode: 'All' },
    ];
    this.dataSource.SelectLotteryClass.lotteryTypes.forEach((data) => {
      let lotteryTypeData = {
        LotteryTypeID: data.LotteryTypeID,
        LotteryTypeCode: data.LotteryTypeCode,
      };
      this.dataSource.selectedLotteryType.push(lotteryTypeData);
    });

    this.dataSource.SelectLotteryType = this.dataSource.selectedLotteryType[1];
  }

  SetMplayDetail(data) {
    switch (data.LotteryTypeID) {
      case 1:
      case 2:
        let result = JSON.parse(data.Result);
        console.log(result);
        data.NewResult = result;
        break;
    }
    this.dataSource.mPlayerDetail = data;
    if(this.dataSource.mPlayerDetail && this.dataSource.mPlayerDetail.vwMPlayers && this.dataSource.mPlayerDetail.vwMPlayers.length > 0) {
      this.dataSource.mPlayerDetail.vwMPlayers.forEach(item => {
        item.SelectedNums = item.SelectedNums.toUpperCase();
      });
    }
    console.log(this.dataSource.mPlayerDetail);
  }

  trackByMethod(index: number, el: any): number {
    return el.index;
  }
}
