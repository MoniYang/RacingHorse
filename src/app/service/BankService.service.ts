import { Injectable } from '@angular/core';
import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';

@Injectable({
  providedIn: 'root',
})
export class BankServiceService {
  constructor(private repositoryHelper: RepositoryHelper) {}

  AddMBank(dataObj): any {
    const ajaxData = {};
    ajaxData['BankCode'] = dataObj.BankCode;
    ajaxData['BankName'] = dataObj.BankName;
    ajaxData['BankNumber'] = dataObj.BankNumber;
    ajaxData['ApiPath'] = '/api/MBank/AddMBank';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindCBank(dataObj): any {
    const ajaxData = {};
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['ApiPath'] = '/api/CBank/FindCBank';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindMBank(dataObj): any {
    const ajaxData = {};
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['ApiPath'] = '/api/CBank/FindMBank';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindMBankByFront(dataObj): any {
    const ajaxData = {};
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['MemberID'] = dataObj.MemberID;
    ajaxData['ApiPath'] = '/api/MBank/FindMBankByFront';

    return this.repositoryHelper.Post(ajaxData);
  }

  FindAcceptedBank(dataObj): any {
    const ajaxData = {};
    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['ApiPath'] = '/api/AcceptedBank/FindAcceptedBank';

    return this.repositoryHelper.Post(ajaxData);
  }
}
