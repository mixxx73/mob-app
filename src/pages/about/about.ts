import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    public contacts = [
        { firstName: 'Joe', lastName: 'Black', value: '666000', managed: true, state: 'yearly review' },
        { firstName: 'Diana', lastName: 'Dirty', value: '1234500', managed: false, state: 'onboarding' },
        { firstName: 'Foo', lastName: 'Bar', value: '500000', managed: true, state: 'managed' },
        { firstName: 'Dick', lastName: 'Tracy', value: '223500', managed: false, state: 'prospect' },
        { firstName: 'Agent', lastName: 'Orange', value: '12300', managed: true, state: 'managed' },
    ];

  constructor(public navCtrl: NavController) {

  }

}
