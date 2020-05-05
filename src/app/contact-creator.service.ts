import { Injectable } from '@angular/core';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Injectable({
  providedIn: 'root'
})
export class ContactCreatorService {

  constructor(private contacts: Contact) { }


  contact: Contact = this.contacts.create();

  //Setting valuses for new contact Form data
  firstName = document.getElementById('firstNameGap');
  lastName = document.getElementById('lastNameGap');; 
  title = document.getElementById('titleGap');;

  //Adding new contact to Phonebook
  createContact(){
    this.contact.name = new ContactName(null, this.firstName.toString(), this.lastName.toString());
    this.contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    this.contact.save().then(
      () => console.log('Contact saved!', this.contact),
      (error: any) => console.error('Error saving contact.', error)
    )
    }
}
