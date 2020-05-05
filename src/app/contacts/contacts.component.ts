import { Component, OnInit } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { ContactCreatorService } from '../contact-creator.service';
const { CapContacts } = Plugins;
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit{
 
  constructor() { }

  ngOnInit(){}

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
  

}
