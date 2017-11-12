import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Note} from '../../note';
import { NOTES } from '../../mock-data';

@Injectable()
export class NewNoteService {
  notes = NOTES;
  note = new Note();
  noteSubmitted = new EventEmitter();

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  reset() {
    this.note = new Note;
  }


  view(note: Note) {
    this.note = note;
  }

  /**
   * Add note to array of NOTES
   */
  submitNote() {
    // Check if note exist in array
    if (this.notes.includes(this.note)) {
      this.updateNote();
    } else {
      this.notes.push(this.note);
      this.note = new Note();
      // Emit to new note component to clear url value and set video component to false
      this.noteSubmitted.emit({clearUrl: undefined, clearVid: false, clearMarkdown: ''});
    }

  }

  /**
   * Update existing notes
   */
  updateNote() {
    const found = this.notes.findIndex(x => x.title === this.note.title);
    this.notes[found] = this.note;
  }

}
