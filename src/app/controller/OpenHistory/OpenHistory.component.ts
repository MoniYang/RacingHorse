import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { LanguageService } from '../../common/Language/language.service';
import { LotteryBettingHistoryService } from '../../service/LotteryBettingHistory.service';
import { UtilsService } from './../../service/helper/UtilsService.service';

@Component({
  selector: 'app-OpenHistory',
  templateUrl: './OpenHistory.component.html',
  styleUrls: ['./OpenHistory.component.css'],
})
export class OpenHistoryComponent implements OnInit {
  constructor(
    private localStorage: LocalStorage,
    private lotteryBettingHistoryService: LotteryBettingHistoryService,
    private utilsService: UtilsService,
    public languageService: LanguageService
  ) {}

  dataSource = {
    selectedLotteryClass: [
      {
        LotteryClassID: -1,
        LotteryClassName: '--Game Class--',
        lotteryTypes: [],
      },
    ],
    selectedLotteryType: [
      { LotteryTypeID: -1, LotteryTypeCode: '--Game Type--', rooms: [] },
    ],
    selectedRoom: [
      {
        RoomID: '-1',
        RoomCode: '--Game Room--',
        IsVip: '',
        MinBuyin: '',
        MaxBuyin: '',
        MinBet: '',
        TotalBet: '',
        TotalWin: '',
      },
    ],
    SelectLotteryClass: {
      LotteryClassID: -1,
      LotteryClassName: '--Game Class--',
      lotteryTypes: [],
    },
    SelectLotteryType: {
      LotteryTypeID: -1,
      LotteryTypeCode: '--Game Type--',
      rooms: [],
    },
    SelectRoom: {
      RoomID: '-1',
      RoomCode: '--Game Room--',
      IsVip: '',
      MinBuyin: '',
      MaxBuyin: '',
      MinBet: '',
      TotalBet: '',
      TotalWin: '',
    },
    openLotteryObj: [],
    searchCondition: {
      RoomID: '',
      LotteryTypeID: 0,
      currentPeriod: '',
      IsVip: false,
      dateS: this.utilsService.formatDate(new Date(), false),
      dateE: this.utilsService.formatDate(new Date(), false),
    },
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

  FindOpenHistory() {
    let lotteryTypeID = 0;
    if (
      this.dataSource.SelectLotteryType &&
      this.dataSource.SelectLotteryType.LotteryTypeID > 0
    ) {
      lotteryTypeID= this.dataSource.SelectLotteryType.LotteryTypeID;
    }
    let roomID = '';
    if (
      this.dataSource.SelectRoom &&
      this.dataSource.SelectRoom.RoomID != null
    ) {
      roomID = this.dataSource.SelectRoom.RoomID;
    }

    let ajaxData = {};
    ajaxData['CurrentPage'] = this.dataSource.PagerObj.CurrentPage;
    ajaxData['PageSize'] = this.dataSource.PagerObj.PageSize;
    ajaxData['LotteryTypeID'] = lotteryTypeID;
    ajaxData['RoomID'] = roomID;
    ajaxData['IsVip'] = this.dataSource.searchCondition.IsVip;
    ajaxData['DateS'] = new Date(this.dataSource.searchCondition.dateS);
    ajaxData['DateE'] = new Date(this.dataSource.searchCondition.dateE);

    this.lotteryBettingHistoryService
      .FindOLotteryHistoryByRoom(ajaxData)
      .subscribe(
        (response) => {
          if (response.APIRes.ResCode === '000') {
            // console.log(response.Rows);
            this.dataSource.openLotteryObj = response.Rows.ListData;

            response.Rows.PagerObj['PageSizeArray'] = [1, 5, 10, 20];
            this.dataSource.PagerObj = this.utilsService.calculatorPageObj(
              response.Rows.PagerObj
            );
            // console.log(this.dataSource.PagerObj);
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
      this.FindOpenHistory();
    }
  }

  ChangePageSize() {
    this.FindOpenHistory();
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
    this.SelectLotteryClass();
  }

  SelectLotteryClass() {
    this.dataSource.selectedLotteryType = [
      { LotteryTypeID: -1, LotteryTypeCode: '--Game Type--', rooms: [] },
    ];
    this.dataSource.SelectLotteryClass.lotteryTypes.forEach((data) => {
      let lotteryTypeData = {
        LotteryTypeID: data.LotteryTypeID,
        LotteryTypeCode: data.LotteryTypeCode,
        rooms: data.rooms,
      };
      this.dataSource.selectedLotteryType.push(lotteryTypeData);
    });

    this.dataSource.SelectLotteryType = this.dataSource.selectedLotteryType[1];
    this.SelectLotteryType();
  }

  SelectLotteryType() {
    this.dataSource.selectedRoom = [
      {
        RoomID: '-1',
        RoomCode: '--Game Room--',
        IsVip: '',
        MinBuyin: '',
        MaxBuyin: '',
        MinBet: '',
        TotalBet: '',
        TotalWin: '',
      },
    ];
    if (this.dataSource.SelectLotteryType.rooms){
      this.dataSource.SelectLotteryType.rooms.forEach((data) => {
        let rooms = {
          RoomID: data.RoomID,
          RoomCode: '',
          IsVip: data.IsVip,
          MinBuyin: data.MinBuyin,
          MaxBuyin: data.MaxBuyin,
          MinBet: data.MinBet,
          TotalBet: data.TotalBet,
          TotalWin: data.TotalWin,
        };
        this.dataSource.selectedRoom.push(rooms);
      });

      this.dataSource.SelectRoom = this.dataSource.selectedRoom[1];
    }
  }
}
