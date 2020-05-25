import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs',
  },

  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule',
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule',
  },

  // 404
  {
    path: '**',
    redirectTo: '/tabs',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
