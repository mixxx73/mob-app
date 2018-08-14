import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public contacts = [
        { firstName: 'Joe', lastName: 'Black', value: '666000', managed: true, state: 'yearly review' },
        { firstName: 'Diana', lastName: 'Dirty', value: '1234500', managed: false, state: 'onboarding' },
        { firstName: 'Foo', lastName: 'Bar', value: '500000', managed: true, state: 'managed' },
        { firstName: 'Dick', lastName: 'Tracy', value: '223500', managed: false, state: 'prospect' },
        { firstName: 'Agent', lastName: 'Orange', value: '12300', managed: true, state: 'managed' },
    ];

    public total = 0;
    public potential = 0;

  constructor(public navCtrl: NavController) {
    for (let contact of this.contacts) {
      if (contact.managed === true ) {
        this.total += Number(contact.value);
      } else {
        this.potential += Number(contact.value);
      }
    }
  }

}
