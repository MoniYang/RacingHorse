import { Injectable } from '@angular/core';

import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';

@Injectable({
  providedIn: 'root'
})
export class MWalletService {

  constructor(private repositoryHelper: RepositoryHelper) { }

  Transfer(dataObj): any {
    let ajaxData = {};
    ajaxData["CompanyFrom"] = dataObj.CompanyFrom;
    ajaxData["CompanyTo"] = dataObj.CompanyTo;
    ajaxData["Amount"] = dataObj.Amount;
    ajaxData["TransType"] = dataObj.TransType;
    ajaxData["ApiPath"] = '/api/TransactionGame/Transfer';

    return this.repositoryHelper.Post(ajaxData);
  }

  GetBalance(dataObj): any {
    let ajaxData = {};
    ajaxData["CompanyID"] = dataObj.CompanyID;
    ajaxData["ApiPath"] = '/api/TransactionGame/GetBalance';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindCompany(dataObj): any {
    let ajaxData = {};
    ajaxData["CurrentPage"] = dataObj.CurrentPage;
    ajaxData["PageSize"] = dataObj.PageSize;
    ajaxData["ApiPath"] = '/api/TransactionGame/FindCompany';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindPlatformMWallet(dataObj): any {
    let ajaxData = {};
    ajaxData["CurrentPage"] = dataObj.CurrentPage;
    ajaxData["PageSize"] = dataObj.PageSize;
    ajaxData["DateS"] = dataObj.DateS;
    ajaxData["DateE"] = dataObj.DateE;
    ajaxData["ApiPath"] = '/api/MWallet/FindMWallet';

    return this.repositoryHelper.Post(ajaxData);

  }

}
