import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { Tab1PageModule } from './tab1/tab1.module';
import { TabsPage } from './tabs/tabs.page';

//const defaultRoute = "/tabs"
const routes: Routes = [
  {
    path: '', loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  { 
    path: 'messages', loadChildren: './messages/messages.module#MessagesModule'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes
      //,{ preloadingStrategy: PreloadAllModules }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
