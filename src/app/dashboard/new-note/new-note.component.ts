import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NewNoteService} from './new-note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewNoteComponent implements OnInit {

  url: string;
  urlSubmitted = false;

  constructor(private newNoteService: NewNoteService) { }

  ngOnInit() {
    // Subscribe to event emitter in service to clear url and reset video status to false
    this.newNoteService.noteSubmitted.subscribe((status) => {
      this.url = status.clearUrl;
      this.urlSubmitted = status.clearVid;
    });
  }

  /**
   * Reset url and video
   */
  cancel() {
    this.url = undefined;
    this.urlSubmitted = false;
  }




  enterUrl() {
    this.urlSubmitted = true;
    const base_url = 'https://www.youtube.com/embed/';
    // Get youtube link ID
    const vid_id = this.url.split('v=')[1].split('&')[0];

    this.newNoteService.newNote.url = this.url;
    this.url = base_url + vid_id;
  }

}
