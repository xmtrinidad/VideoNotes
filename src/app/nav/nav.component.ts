import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NavService} from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {

  constructor(public navService: NavService) { }

  ngOnInit() {
  }

  noteClick() {
    this.navService.menuStateChange();
  }

}
