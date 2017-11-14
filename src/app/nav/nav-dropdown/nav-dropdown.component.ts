import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {NavService} from '../nav.service';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
  animations: [
    trigger('menuState', [
      state('hide', style({
        display: 'none',
        top: -800 + 'px'
      })),
      state('show', style({
        top: 0,
        display: 'block'
      })),
      transition('hide <=> show', animate('400ms ease-in-out'))
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavDropdownComponent implements OnInit {


  constructor(public navService: NavService) { }

  ngOnInit() {

  }

  closeMenu() {
    this.navService.menuStateChange();
  }

}
