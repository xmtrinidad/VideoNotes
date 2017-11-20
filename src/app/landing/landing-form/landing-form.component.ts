import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LandingService} from '../landing.service';
import {FormInfo} from '../form-data';
import {AuthService} from '../../core/auth.service';

@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LandingFormComponent implements OnInit {
  showEmail = false;
  register = false;
  formInfo: FormInfo;

  email: string;
  password: string;

  constructor(
    private landingService: LandingService,
    public fsAuth: AuthService
  ) { }

  ngOnInit() {
    this.formInfo = this.landingService.forms;
  }

  registerUser() {
    this.register = this.register !== true;
  }

  emailLogin() {
    this.showEmail = true;
  }

}
