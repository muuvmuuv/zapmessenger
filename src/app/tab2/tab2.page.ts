import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { ContactCreatorService } from '../contact-creator.service';
const { CapContacts } = Plugins;
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  /*
  source of CapContactsPlugin:
  https://www.npmjs.com/package/@byrds/capacitor-contacts

  Functions available:
  export interface CapContactsPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
  checkPermissions(): Promise<{value: string}>;
  getPermissions(): Promise<any>;
  getContacts(): Promise<{ contacts: Array<any> }>;
  getGroups(): Promise<{ groups: Array<any> }>;
  getContactGroups(): Promise<any>;
  deleteContact(options: { lookupKey: string }): Promise<any>;
  storeContact(): Promise<any>;
}

*/

  //Logic for checking whether or not to request new contact info
  newContactAvailable: boolean = false;

  //Array for storing contacts
  contactsList = CapContacts.getContacts();

  //Accessor for create contact button
  newContact = document.getElementById('createContact');

  //Event listener for cnewContact button
  contactAdder = fromEvent(this.newContact, 'click');

  //Subscriber that appends new contact to contacts library
  contactCreator = this.contactAdder.subscribe(() => {
  
    this.newContactAvailable = true;
    CapContacts.storeContact();
  }
  )
  /*sample phonebook
  contactsList = [
    {"name": "Richard", "phoneNumber": "0796379342"},
    {"name": "Marjorie", "phoneNumber": "0796379342"},
    {"name": "Luther", "phoneNumber": "0796379342"},
    {"name": "Clark", "phoneNumber": "0796379342"},
    {"name": "Jeremy", "phoneNumber": "0796379342"},
    {"name": "Apron", "phoneNumber": "0796379342"},
    {"name": "Donald", "phoneNumber": "0796379342"},
    {"name": "Dalot", "phoneNumber": "0796379342"},
    {"name": "Raymond", "phoneNumber": "0796379342"},
    {"name": "Will", "phoneNumber": "0796379342"},
    {"name": "Othiniel", "phoneNumber": "0796379342"},
    {"name": "Redmond", "phoneNumber": "0796379342"},
    {"name": "Dreyfus", "phoneNumber": "0796379342"},
    {"name": "Abra", "phoneNumber": "0796379342"},
    {"name": "Brahm", "phoneNumber": "0796379342"},
    {"name": "Scott", "phoneNumber": "079569342"},
    {"name": "Kirk", "phoneNumber": "0765379342"},
    {"name": "Pike", "phoneNumber": "0796379234"},
    {"name": "Julian", "phoneNumber": "0793429342"},
    {"name": "Maggie", "phoneNumber": "0796349342"},  
  ];*/
}
