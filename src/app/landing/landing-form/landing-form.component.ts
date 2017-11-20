import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LandingService} from '../landing.service';
import {FormInfo} from '../form-data';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingFormComponent implements OnInit {
  showEmail = false;
  formInfo: FormInfo;

  constructor(private landingService: LandingService) { }

  ngOnInit() {
    this.formInfo = this.landingService.forms;
  }

  formClick(btnName) {

    if (btnName === 'Register' || btnName === 'Cancel') {
      this.formInfo = this.landingService.getForm(btnName);
      return;
    }

  }

  emailLogin() {
    this.showEmail = true;
  }

}
