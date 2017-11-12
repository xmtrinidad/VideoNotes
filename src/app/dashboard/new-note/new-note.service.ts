import {EventEmitter, Injectable} from '@angular/core';
import { Note, NOTES } from '../../note';

@Injectable()
export class NewNoteService {
  newNote = new Note();
  noteSubmitted = new EventEmitter();

  constructor() { }

  /**
   * Add note to array of NOTES
   */
  submitNote() {
    NOTES.push(this.newNote);
    this.newNote = new Note();
    // Emit to new note component to clear url value and set video component to false
    this.noteSubmitted.emit({clearUrl: undefined, clearVid: false, clearMarkdown: ''});
  }

}
