import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BetHistoryComponent } from './controller/BetHistory/BetHistory.component';
import { HomeComponent } from './controller/home/home.component';
import { LobbyComponent } from './controller/lobby/lobby.component';
import { MemberCenterComponent } from './controller/memberCenter/memberCenter.component';
import { OpenHistoryComponent } from './controller/OpenHistory/OpenHistory.component';
import { PageNotFoundComponent } from './controller/pageNotFound/pageNotFound.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, resolve: {}, children: [] },
  { path: 'lobby', component: LobbyComponent, resolve: {}, children: [] },
  // { path: 'promotion', component: PromotionComponent, resolve: {}, children: [] }, // 暫時移除
  { path: 'memberCenter', component: MemberCenterComponent, resolve: {}, children: [] },
  // { path: 'myPromo', component: MyPromoComponent, children: [] }, // 暫時移除
  { path: 'openHistory', component: OpenHistoryComponent, children: [] },
  { path: 'betHistory', component: BetHistoryComponent, children: [] },
  { path: '**', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      onSameUrlNavigation: 'reload',
      enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
