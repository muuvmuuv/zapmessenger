import { Component, OnInit } from '@angular/core';
//import { of, Observable } from 'rxjs';
import { fromEvent } from 'rxjs';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent{

  constructor() {}

  //Properties of second person app user
user = {
  name,
  dateLastSeen(){
  }
}

//Function that reports time that user was last online
dateLastSeen(){}

othersname : string = this.user.name;
lastseen : any = this.user.dateLastSeen();
name: string;

//Observable for fetching data from textbox
sendButton = document.getElementById('send');
sendData = fromEvent(this.sendButton, 'click');

upload = this.sendData.subscribe(
    
)


/**
 * 
 * 
my.firebase.send(document.getElementById(inputbox).value);
other.firebase.send(value);
document.createElement("div").content(value);
document.getElementById(inputbox).clear();
}

of(firebase.received(value)){
document.createElement("div").content(value);
}

*
*
*/


}

