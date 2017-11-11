import { Injectable } from '@angular/core';

@Injectable()
export class NavService {

  menu = 'hide';

  constructor() { }

  menuStateChange() {
    this.menu = this.menu === 'hide' ? 'show' : 'hide';
  }

}
