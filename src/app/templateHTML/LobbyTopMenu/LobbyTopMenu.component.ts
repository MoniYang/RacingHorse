import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ngAuthSettings } from 'src/app/common/WebConfig.Product';

import { MembershipService } from '../../service/membershipService.service';
import { LanguageService } from './../../common/Language/language.service';

@Component({
  selector: 'app-LobbyTopMenu',
  templateUrl: './LobbyTopMenu.component.html',
  styleUrls: ['./LobbyTopMenu.component.scss'],
})
export class LobbyTopMenuComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location,
    private membershipService: MembershipService,
    public languageService: LanguageService,
  ) {
    this.dataSource.routerURL = this.location.path(false);
    this.CheckLoginStatus();

    if (localStorage.getItem('LanguageRead')) {
      this.dataSource.selLanguage = localStorage.getItem('LanguageRead');
    }
  }

  currentLotteryTimer: any = 0;
  elem: any = {};

  dataSource = {
    isLoginNow: false,
    isShowPwd: false,
    isShowMemberFn: true,
    isShowHamburg: false,
    thirdPartyUrl: '',
    currentLotteryTimer: {},
    routerURL: '',
    lobbyClass: '',
    modalMsg: {
      resCode: '000',
      title: '',
      msg: '',
      appDownloadUrl: ngAuthSettings.appDownloadUrl,
      isAppDownload: false,
      callback: '',
    },
    callBackData: {},
    menuList: [
      {
        Text: 'Home',
        LangKey: 'Home',
        URL: 'home',
        IsEnable: true,
        LotteryTypeID: 0,
      },
      {
        Text: 'Home_Lobby',
        LangKey: 'Home_Lobby',
        URL: 'lobby',
        IsEnable: true,
        LotteryTypeID: 0,
      },
      // 暫時移除
      // {
      //   Text: 'Home_Promotion',
      //   LangKey: 'Home_Promotion',
      //   URL: 'promotion',
      //   IsEnable: true,
      //   LotteryTypeID: 0,
      // },
      {
        Text: 'Home_Transaction',
        LangKey: 'Home_Transaction',
        URL: 'transaction/DepositeView',
        IsEnable: true,
        LotteryTypeID: 0,
      },
      {
        Text: 'Home_Wallet',
        LangKey: 'Home_Wallet',
        URL: 'transferWallet',
        IsEnable: true,
        LotteryTypeID: 0,
      },
      {
        Text: 'Home_918Kiss',
        LangKey: 'Home_918Kiss',
        URL: 'transferWallet',
        IsEnable: true,
        // CompanyID: 3
      },
      {
        Text: 'Home_SexyBaccarat',
        LangKey: 'Home_SexyBaccarat',
        URL: 'transferWallet',
        IsEnable: true,
        // CompanyID: 2
      },
      {
        Text: 'Home_Mega888',
        LangKey: 'Home_Mega888',
        URL: 'transferWallet',
        IsEnable: true,
        CompanyID: 0
      },
      {
        Text: 'Home_918KISS2',
        LangKey: 'Home_918KISS2',
        URL: 'transferWallet',
        IsEnable: true,
        CompanyID: 0
      },
      {
        Text: 'Home_918Kaya',
        LangKey: 'Home_918Kaya',
        URL: 'transferWallet',
        IsEnable: true,
        CompanyID: 0
      },
      {
        Text: 'Home_Pussy888',
        LangKey: 'Home_Pussy888',
        URL: 'transferWallet',
        IsEnable: true,
        CompanyID: 0
      },
    ],
    SubMenuList: [
      {
        Text: 'Home_Profile',
        LangKey: 'Home_Profile',
        URL: 'memberCenter',
        Class: 'fas fa-user',
        IsEnable: true,
      },
      {
        Text: 'Home_BetHistory',
        LangKey: 'Home_BetHistory',
        URL: 'betHistory',
        Class: 'fas fa-search-dollar',
        IsEnable: true,
      },
      /*
      {
        Text: 'Home_OpenHistory',
        LangKey: 'Home_OpenHistory',
        URL: 'openHistory',
        Class: 'fas fa-history',
      },
      {
        Text: 'Home_ReferralLog',
        LangKey: 'Home_ReferralLog',
        URL: 'referralLog',
        Class: 'fas fa-clipboard-list',
      },
      */
      // 暫時移除
      // {
      //   Text: 'Home_MyPromo',
      //   LangKey: 'Home_MyPromo',
      //   URL: 'myPromo',
      //   Class: 'fas fa-percentage',
      //   IsEnable: true,
      // },
    ],
    loginStatu: {
      login: true,
      register: false,
    },
    registerDataObj: {
      UserName: '',
      Pwd: '',
      ConfirmPwd: '',
      MoneyPwd: '',
      NickName: '',
      FullName: '',
      EMail: 'front@qq.com',
      Phone: '',
      Birthday: '',
      ValidatorCode: '',
      WalletIsLock: false,
      UserType: 10,
      IsMultiLogin: false,
      Status: true,
      ReferralMap: '',
      InputCode: '',
    },
    registerErrorMsg: {
      ConfirmPwd: '',
      EMail: '',
    },
    userDataObj: {
      UserName: '',
      Pwd: '',
      PlateForm: '',
      IsMandatory: false,
      InputCode: '',
      ValidatorCode: '',
    },
    userinfo: {
      UserName: '',
      NickName: '',
      TotalBalance: 0,
      Balance: 0
    },
    validObj: {
      ValidatorCode: '',
      ValidatorCodeImg: '',
    },
    selLanguage: 'en',
    angpaoMoney: 0,
  };

  ngOnInit() {
    this.elem = document.documentElement;

    // if (this.dataSource.routerURL.indexOf('lobby') >= 0) {
    //   this.dataSource.lobbyClass = 'lobbyUsed';
    // } else {
    //   this.dataSource.lobbyClass = '';
    // }
    this.currentLotteryTimer = setInterval(() => {
      this.GetBalance();
    }, 5000);
  }

  // 無API
  CheckLoginStatus() {
    const userInfoCheck = JSON.parse(localStorage.getItem('UserInfo'));
    this.dataSource.isLoginNow =
      userInfoCheck && userInfoCheck.UserName ? true : false;

    if (this.dataSource.isLoginNow) {
      this.dataSource.userinfo = JSON.parse(localStorage.getItem('UserInfo'));
      document.body.id = 'gyroContain';
      this.dataSource.lobbyClass = 'lobbyUsed';
    }
    else {
      if (this.dataSource.routerURL && this.dataSource.routerURL.indexOf('Home') < 0) {
        this.dataSource.userinfo = {
          UserName: '',
          NickName: '',
          TotalBalance: 0,
          Balance: 0
        };

        document.body.id = '';
        this.dataSource.lobbyClass = '';
        location.href = './Home';
        // this.router.navigate(['Home']);
      }
    }
  }

  //Child模板事件發生時，會呼叫此方法回傳值
  onListenMsgBox($event: any) {
    if (this.dataSource.modalMsg.resCode === '210') {
      this.dataSource.userDataObj.IsMandatory = $event.IsMandatory;
    }
  }


  // 有API
  GetBalance() {
    if (localStorage.getItem('UserName')) {
      this.membershipService.GetTotalBalance({}).subscribe(
        (response) => {
          if (response.APIRes.ResCode === '000') {
            this.dataSource.userinfo = JSON.parse(
              localStorage.getItem('UserInfo')
            );
            this.dataSource.userinfo.TotalBalance = response.Rows.TotalBalance;
            localStorage.setItem(
              'UserInfo',
              JSON.stringify(this.dataSource.userinfo)
            );
          } else {
            localStorage.removeItem('UserToken');
            localStorage.removeItem('UserInfo');
            localStorage.removeItem('UserName');
            localStorage.removeItem('PlayToken');
            localStorage.removeItem('CBank');
            this.CheckLoginStatus();
            this.dataSource.modalMsg.title = 'Login';
            this.dataSource.modalMsg.msg = response.APIRes.ResMessage;
            this.dataSource.modalMsg.callback = 'Relogin';
            $('#ModalShow').click();
            location.href = './Home';
            // this.router.navigate(['Home']);
            console.log(response.APIRes);
          }
        },
        (error) => {
          console.log('Error happened' + error);
        }
      );
    }
  }
}
