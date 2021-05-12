import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BetHistoryComponent } from './controller/BetHistory/BetHistory.component';
import { HomeComponent } from './controller/home/home.component';
import { LobbyComponent } from './controller/lobby/lobby.component';
import { MemberCenterComponent } from './controller/memberCenter/memberCenter.component';
import { OpenHistoryComponent } from './controller/OpenHistory/OpenHistory.component';
import { RacingHorseComponent } from './controller/RacingHorse/RacingHorse.component';
import { PageNotFoundComponent } from './controller/pageNotFound/pageNotFound.component';

import { AppMessageBoxComponent } from './templateHTML/AppMessageBox/AppMessageBox.component';
import { BetHistorySearchComponent } from './templateHTML/BetHistorySearch/BetHistorySearch.component';
import { LoadingComponent } from './templateHTML/loading/loading.component';
import { LobbyTopMenuComponent } from './templateHTML/LobbyTopMenu/LobbyTopMenu.component';
import { LogoComponent } from './templateHTML/logo/logo.component';
import { MessageBoxComponent } from './templateHTML/MessageBox/MessageBox.component';
import { ReceiptComponent } from './templateHTML/receipt/receipt.component';
import { RuleComponent } from './templateHTML/rule/rule.component';
import { TopmenuComponent } from './templateHTML/topmenu/topmenu.component';
import { TopMenuMessageBoxComponent } from './templateHTML/TopMenuMessageBox/TopMenuMessageBox.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    BetHistoryComponent,
    BetHistorySearchComponent,
    HomeComponent,
    MemberCenterComponent,
    LobbyComponent,
    LobbyTopMenuComponent,
    LogoComponent,
    LoadingComponent,
    MessageBoxComponent,
    OpenHistoryComponent,
    PageNotFoundComponent,
    ReceiptComponent,
    RuleComponent,
    TopmenuComponent,
    TopMenuMessageBoxComponent,
    AppMessageBoxComponent,
    RacingHorseComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule ,FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {

  }

}
