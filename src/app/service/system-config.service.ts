import { Injectable } from '@angular/core';

import { RepositoryHelper } from '../repository/helper/repositoryHelper.repository';
import { UtilsService } from './helper/UtilsService.service';

@Injectable({
  providedIn: 'root',
})
export class SystemConfigService {
  constructor(
    private repositoryHelper: RepositoryHelper,
    private utilsService: UtilsService
  ) {}

  FindSystemConfig(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/SystemConfig/FindSystemConfig';

    ajaxData['CurrentPage'] = dataObj.CurrentPage;
    ajaxData['PageSize'] = dataObj.PageSize;
    ajaxData['DateS'] = this.utilsService.getDateS(dataObj.DateS);
    ajaxData['DateE'] = this.utilsService.getDateE(dataObj.DateE);
    ajaxData['ConfigName'] = dataObj.ConfigName;
    ajaxData['ConfigParentID'] = dataObj.ConfigParentID;
    ajaxData['ConfigTypeID'] = dataObj.ConfigTypeID;

    return this.repositoryHelper.Post(ajaxData);
  }

  FindSystemConfigChildren(dataObj): any {
    const ajaxData = {};
    ajaxData['ApiPath'] = '/api/SystemConfig/FindSystemConfigChildren';

    ajaxData['ListConfigName'] = dataObj.ListConfigName;

    return this.repositoryHelper.Post(ajaxData);
  }
}
