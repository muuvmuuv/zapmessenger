import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MessagesComponent } from './messages.component';


@NgModule({
  declarations: [MessagesComponent],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  exports: [MessagesComponent]
})


export class MessagesModule { }