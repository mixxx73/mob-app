import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contacts = [
      { firstName: 'Joe', lastName: 'Black', value: '666000' },
      { firstName: 'Diana', lastName: 'Dirty', value: '1234500' },
      { firstName: 'Foo', lastName: 'Bar', value: '500000' },
      { firstName: 'Dick', lastName: 'Tracy', value: '223500' },
      { firstName: 'Agent', lastName: 'Orange', value: '12300' },
  ];
  constructor(public navCtrl: NavController) {

  }

}
