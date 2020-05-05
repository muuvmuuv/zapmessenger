import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-chats',
  templateUrl: './recent-chats.component.html',
  styleUrls: ['./recent-chats.component.scss'],
})
export class RecentChatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  inbox = {
  } ;
  
  count(list){
    var j = 0;
    for (const i in list){
      j++;
      return j
    }
  }
  chats: number = this.count(this.inbox);
  contacts ;

}
