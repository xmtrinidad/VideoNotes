import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class NavService implements OnInit{
  menu = 'hide';

  constructor() { }

  ngOnInit() {

  }



  menuStateChange() {
    this.menu = this.menu === 'hide' ? 'show' : 'hide';
  }



}
