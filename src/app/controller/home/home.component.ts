import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../common/Language/language.service';
import { WebConfig } from '../../common/WebConfig.Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    public languageService: LanguageService
  ) { }
  dataSource = {
    bannerURL: WebConfig.serviceBase + '/Fileupload/UploadDocuments',
    Angpaos: [],
  };

  ngOnInit() {
  }

  indexGameClick() { }
}
