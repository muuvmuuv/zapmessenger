import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router'


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router : Router) { }

  name: string;
  hint: any;
  lastseen: Date;
  inbox = {};
  firebase: AngularFirestore;
  //Chats Logic Placeholder
  chats = 0;


  count(list) {
    var j = 0;
    for (const i in list) {
      j++;
      return j
    }
  }
  //chats: number = this.count(this.inbox);
  imbox = [
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." },
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." },
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." },
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." },
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." }, 
    { "name": "Richard", "lastseen": "0796379342", "hint": "These are the first..." },
  ];

  accessMessages(){
    this.router.navigate(['/messages']);
  }
  }
  