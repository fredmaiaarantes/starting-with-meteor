import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from './ContactsCollection.js';

Meteor.publish('contacts', function publishContacts() {
  return ContactsCollection.find();
});
