import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Note} from '../../note';
import { NOTES } from '../../mock-data';

@Injectable()
export class NewNoteService {
  newNote = new Note();
  noteSubmitted = new EventEmitter();

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }

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
