import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewNoteComponent implements OnInit {

  url: string;
  urlSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.url = '';
    this.urlSubmitted = false;
  }




  enterUrl() {
    this.urlSubmitted = true;
    // Get youtube llink ID
    const base_url = 'https://www.youtube.com/embed/';
    const vid_id = this.url.split('v=')[1].split('&')[0];
    this.url = base_url + vid_id;
  }

}
