import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../common/Language/language.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  constructor(
    public languageService: LanguageService
    ) {}

  currentLotteryTimer: any = 0;

  dataSource = {
    currentLotteryTimer: {},
    tickets: {
      CurrentPeriod: '',
      CreateDate: new Date(),
      TotalBet: 0,
      TotalPrice: 0,
      MPlayList: [],
    },
  };

  ngOnInit() {
    this.currentLotteryTimer = setInterval(() => {
      this.checkOpenTicket();
    }, 2000);
  }

  checkOpenTicket() {
    if (localStorage.getItem('MPlayTicket')) {
      this.dataSource.tickets.MPlayList = JSON.parse(
        localStorage.getItem('MPlayTicket')
      );

      let totalBet = 0;
      let totalPrice = 0;
      for (var i = 0; i < this.dataSource.tickets.MPlayList.length; i++) {
        totalBet += 1;
        totalPrice += this.dataSource.tickets.MPlayList[i].Price;
      }
      this.dataSource.tickets.CurrentPeriod = this.dataSource.tickets.MPlayList[0].CurrentPeriod;
      this.dataSource.tickets.CreateDate = new Date();
      this.dataSource.tickets.TotalBet = totalBet;
      this.dataSource.tickets.TotalPrice = totalPrice;

      //$('#ticket').click();
      /*
      setTimeout(() => {
        this.clearTicket();
      }, 1000);
      */
    }
  }

  clearTicket() {
    localStorage.removeItem('MPlayTicket');
    setTimeout(() => {
      $('#closeTicket').click();
    }, 3000);
  }

  SetTimeoutClear() {
    if (this.dataSource.currentLotteryTimer) {
      clearInterval(this.currentLotteryTimer);
    }
  }
}
