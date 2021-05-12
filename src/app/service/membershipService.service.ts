import { Injectable } from '@angular/core';

import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';
import { MembershipRepository } from '../repository/memberShip.repository';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  constructor(
    private membershipRepository: MembershipRepository,
    private repositoryHelper: RepositoryHelper
  ) {}

  AddUser(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/Register';
    ajaxData['WalletIsLock'] = userDataObj.WalletIsLock;
    ajaxData['UserType'] = userDataObj.UserType;
    ajaxData['IsMultiLogin'] = userDataObj.IsMultiLogin;
    ajaxData['UserName'] = userDataObj.UserName;
    ajaxData['Pwd'] = userDataObj.Pwd;
    ajaxData['Birthday'] = userDataObj.Birthday;
    ajaxData['MoneyPwd'] = userDataObj.MoneyPwd;
    ajaxData['NickName'] = userDataObj.NickName;
    ajaxData['FullName'] = userDataObj.FullName;
    ajaxData['Status'] = userDataObj.Status;
    ajaxData['Email'] = userDataObj.EMail;
    //含*字號代表未修改
    ajaxData['Phone'] =
      userDataObj.Phone.indexOf('*') >= 0 ? '' : userDataObj.Phone;
    ajaxData['ReferralMap'] = userDataObj.ReferralMap;
    ajaxData['InputCode'] = userDataObj.InputCode;
    ajaxData['ValidatorCode'] = userDataObj.ValidatorCode;

    return this.repositoryHelper.Post(ajaxData);
  }

  ChangePwdMember(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/ChangePwdMember';
    ajaxData['MemberOldPwd'] = userDataObj.MemberOldPwd;
    ajaxData['MemberNewPwd'] = userDataObj.MemberNewPwd;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindUser(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/FindMember';
    ajaxData['CurrentPage'] = userDataObj.CurrentPage;
    ajaxData['PageSize'] = userDataObj.PageSize;
    ajaxData['UserName'] = userDataObj.UserName;
    ajaxData['EMail'] = userDataObj.Email;
    ajaxData['Address'] = userDataObj.Address;
    ajaxData['Phone'] = userDataObj.Phone;
    ajaxData['UserLevelID'] = userDataObj.UserLevelID;
    ajaxData['AgentParentID'] = userDataObj.AgentParentID;
    ajaxData['IsTree'] = userDataObj.IsTree;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindSiteMap(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/FindSiteMap';

    return this.repositoryHelper.Post(ajaxData);
  }

  ForgetPwd(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/ForgetPwd';
    ajaxData['UserName'] = userDataObj.UserName;
    ajaxData['IsTree'] = userDataObj.IsTree;

    return this.repositoryHelper.Post(ajaxData);
  }

  GenValidatorCode(): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/GenValidatorCode';

    return this.repositoryHelper.Post(ajaxData);
  }

  GetTotalBalance(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/GetTotalBalance';

    return this.repositoryHelper.Post(ajaxData);
  }

  GenRegisterOTP() {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/GetOTP';

    return this.repositoryHelper.Post(ajaxData);
  }

  Login(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/LoginByFront';
    ajaxData['UserName'] = userDataObj.UserName;
    ajaxData['Pwd'] = userDataObj.Pwd;
    ajaxData['PlateForm'] = userDataObj.PlateForm;
    ajaxData['IsMandatory'] = userDataObj.IsMandatory;
    ajaxData['InputCode'] = userDataObj.InputCode;
    ajaxData['ValidatorCode'] = userDataObj.ValidatorCode;

    return this.membershipRepository.Login(ajaxData);
  }

  Logout(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/Logout';
    ajaxData['UserName'] = userDataObj.UserName;

    return this.membershipRepository.Logout(ajaxData);
  }

  UpdateUser(userDataObj): any {
    let ajaxData = {};
    ajaxData['ApiPath'] = '/api/MemberShip/UpdateUser';
    ajaxData['MemberID'] = userDataObj.MemberID;
    ajaxData['UserType'] = userDataObj.UserType;
    ajaxData['WalletIsLock'] = userDataObj.WalletIsLock;
    ajaxData['IsMultiLogin'] = userDataObj.IsMultiLogin;
    ajaxData['IsEditPhone'] = userDataObj.IsEditPhone;
    ajaxData['IsEmailValidator'] = userDataObj.IsEmailValidator;
    ajaxData['IsEditEmail'] = userDataObj.IsEditEmail;
    ajaxData['IsLock'] = userDataObj.IsLock;
    ajaxData['IsEnable'] = userDataObj.IsEnable;
    ajaxData['MaxWinAmount'] = userDataObj.MaxWinAmount;
    ajaxData['UserLevelID'] = userDataObj.UserLevelID;
    ajaxData['AgentRebate'] = userDataObj.AgentRebate;
    ajaxData['TotalBalance'] = userDataObj.TotalBalance;
    ajaxData['MonthDeposit'] = userDataObj.MonthDeposit;
    ajaxData['TotalDeposit'] = userDataObj.TotalDeposit;
    ajaxData['UserName'] = userDataObj.UserName;
    ajaxData['Pwd'] = userDataObj.Pwd;
    ajaxData['Birthday'] = userDataObj.Birthday;
    ajaxData['MoneyPwd'] = userDataObj.MoneyPwd;
    ajaxData['NickName'] = userDataObj.NickName;
    ajaxData['FullName'] = userDataObj.FullName;
    ajaxData['Status'] = userDataObj.Status;
    ajaxData['Email'] = userDataObj.Email;
    ajaxData['Phone'] =
      userDataObj.Phone.indexOf('*') >= 0 ? '' : userDataObj.Phone; //含*字號代表未修改
    ajaxData['AgentLevelSCID'] = userDataObj.AgentLevelSCID;
    ajaxData['AgentParentID'] = userDataObj.AgentParentID;
    ajaxData['AgentParentMap'] = userDataObj.AgentParentMap;
    ajaxData['AgentPositionTakingRebate'] =
      userDataObj.AgentPositionTakingRebate;
    ajaxData['ReferralLink'] = userDataObj.ReferralLink;
    ajaxData['ReferralRebate'] = userDataObj.ReferralRebate;
    ajaxData['ReferralPayType'] = userDataObj.ReferralPayType;
    ajaxData['ReferralLayerID'] = userDataObj.ReferralLayerID;
    ajaxData['ReferralMap'] = userDataObj.ReferralMap;
    ajaxData['ReferralCashRebate'] = userDataObj.ReferralCashRebate;

    return this.repositoryHelper.Post(ajaxData);
  }
}
