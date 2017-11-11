import { Injectable } from '@angular/core';
import { FormInfo, forms} from './form-data';

@Injectable()
export class LandingService {
  forms: FormInfo = forms[0];

  constructor() { }


  /**
   * Gets form data based on clicked button
   * @param btnClicked - the btn clicked inside the component
   * @return {FormInfo} - the form data
   */
  getForm(btnClicked) {
    if (btnClicked === 'Register') {
      this.forms = forms[1];
    } else if (btnClicked === 'Cancel') {
      this.forms = forms[0];
    }
    return this.forms;
  }

}
