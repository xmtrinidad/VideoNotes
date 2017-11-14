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

  /**
   * Sets url submitted to true so show video component
   * and sets the new note url to the entered url
   */
  enterUrl() {
    this.newNoteService.reset();
    this.urlSubmitted = true;
    this.newNoteService.note.url = this.url;
  }

  /**
   * Youtube validator taken from Stack Overflow:
   * https://stackoverflow.com/questions/28735459/how-to-validate-youtube-url-in-client-side-in-text-box
   **/
  validateYouTubeUrl() {
    if (this.url !== undefined || this.url !== '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = this.url.match(regExp);
      return match && match[2].length === 11;
    }
  }

}
