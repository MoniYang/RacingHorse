import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';

import { LanguageService } from '../../common/Language/language.service';
import { MembershipService } from '../../service/membershipService.service';
import { BankServiceService } from './../../service/BankService.service';

@Component({
  selector: 'app-memberCenter',
  templateUrl: './memberCenter.component.html',
  styleUrls: ['./memberCenter.component.scss'],
})
export class MemberCenterComponent implements OnInit {
  constructor(
    private localStorage: LocalStorage,
    private membershipService: MembershipService,
    private bankServiceService: BankServiceService,
    public languageService: LanguageService
  ) { }

  dataSource = {
    isShowAddCard: true,
    isShowUserInfo: false,
    isEditUserInfo: false,
    UserInfo: {
      MemberID: 0,
      UserName: '',
      UserLevelID: 0,
      MGroupID: 0,
      Birthday: '',
      MoneyPwd: '',
      NickName: '',
      FullName: '',
      Email: '',
      Phone: '',
      LoginTime: '',
      LastLoginTime: '',
      LoginIP: '',
      TotalBalance: '',
      MonthDeposit: '',
      TotalDeposit: '',
      MaxWinAmount: '',
      TotalRealBet: '',
      ReferralLink: '',
      ReferralPayType: '',
    },
    UpdateObj: {
      NickName: '',
    },
    AcceptedBanks: [],
    NowAcceptedBank: {
      BankCode: '',
      BankName: '',
    },
    BankInfos: [],
    BankNumber: '',
    resetObj: { MemberOldPwd: '', MemberNewPwd: '', ConfirmPassword: '' }
  };

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.dataSource.UserInfo = JSON.parse(localStorage.getItem('UserInfo'));
    this.FindAcceptedBank();
    this.FindMBank();
  }

  // 呼叫用戶更新
  UpdateMember() {
    const ajaxData = this.dataSource.UserInfo;
    ajaxData.NickName = this.dataSource.UpdateObj.NickName;
    this.membershipService.UpdateUser(ajaxData).subscribe(
      (response) => {
        if (response.APIRes.ResCode === '000') {
        }
        return response;
      },
      (error) => {
        console.log('Error happened' + error);
      }
    );
  }

  AddMBank() {
    const ajaxData = {};
    ajaxData['BankCode'] = this.dataSource.NowAcceptedBank.BankCode;
    ajaxData['BankName'] = this.dataSource.NowAcceptedBank.BankName;
    ajaxData['BankNumber'] = this.dataSource.BankNumber;

    this.bankServiceService.AddMBank(ajaxData).subscribe(
      (response) => {
        if (response.APIRes.ResCode === '000') {
          this.FindMBank();
        }
        return response;
      },
      (error) => {
        console.log('Error happened' + error);
      }
    );
  }

  FindAcceptedBank() {
    const ajaxData = {};
    ajaxData['CurrentPage'] = 1;
    ajaxData['PageSize'] = 100;

    this.bankServiceService.FindAcceptedBank(ajaxData).subscribe(
      (response) => {
        if (response.APIRes.ResCode === '000') {
          this.dataSource.AcceptedBanks = response.Rows.ListData;
          this.dataSource.NowAcceptedBank = this.dataSource.AcceptedBanks[0];
          // console.log(
          //   this.dataSource.NowAcceptedBank,
          //   this.dataSource.AcceptedBanks
          // );
        }
      },
      (error) => {
        console.log('Error happened' + error);
      }
    );
  }

  FindMBank() {
    const ajaxData = {};
    ajaxData['CurrentPage'] = 1;
    ajaxData['PageSize'] = 100;

    this.bankServiceService.FindMBankByFront(ajaxData).subscribe(
      (response) => {
        if (response.APIRes.ResCode === '000') {
          this.dataSource.BankInfos = response.Rows.ListData.filter((x) => {
            x.MoneyPwd = '';
            return x.MemberID == this.dataSource.UserInfo.MemberID;
          });
        }
        return response;
      },
      (error) => {
        console.log('Error happened' + error);
      }
    );
  }

  // 無API的方法
  ChangeAddBankCard() {
    this.dataSource.isShowAddCard = !this.dataSource.isShowAddCard;
  }

  ChangeUserInfo() {
    this.dataSource.isShowUserInfo = !this.dataSource.isShowUserInfo;
  }

  ChangeEditUserInfo() {
    this.dataSource.isEditUserInfo = !this.dataSource.isEditUserInfo;
  }

  ConsoleLog(data) {
    console.log(data);
  }

  resetPwd() {
    let msg = '';
    if(!this.dataSource.resetObj.MemberOldPwd){
      msg += 'Please enter old password. \n';
    }
    if(!this.dataSource.resetObj.MemberNewPwd){
      msg += 'Please enter new password. \n';
    }
    if(!this.dataSource.resetObj.ConfirmPassword){
      msg += 'Please enter confirm password. \n';
    }
    if(this.dataSource.resetObj.MemberNewPwd !== this.dataSource.resetObj.ConfirmPassword){
      msg += 'Please check confirm password.';
    }

    if(msg){
      alert(msg);
      return;
    }

    this.membershipService.ChangePwdMember(this.dataSource.resetObj).subscribe(
      (response) => {
            alert(response.APIRes.ResMessage);
        },
        (error) => {
          console.log('Error happened' + error);
        });
  }
}
