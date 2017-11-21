import {EventEmitter, Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Note } from '../../note';
import { NOTES } from '../../mock-data';
import {AuthService} from '../../core/auth.service';

@Injectable()
export class NewNoteService {
  getNotes = new EventEmitter<Note[]>();
  savedNotes: Note[];
  note = new Note();
  noteSubmitted = new EventEmitter();

  constructor(private authService: AuthService) {
    this.authService.user.subscribe((t) => {
      if (t === null) {
        return;
      }
      this.getNotes.emit(t.notes);
      this.savedNotes = t.notes;
    });
  }

  /**
   * Reset the current note
   */
  reset() {
    this.note = new Note;
  }

  /**
   * Clear url, markdown and reset video status
   */
  emitClear() {
    this.noteSubmitted.emit({clearUrl: undefined, clearVid: false, clearMarkdown: ''});
  }


  /**
   * Set clicked note to view
   * @param {Note} note - the note clicked
   */
  view(note: Note) {
    this.note = note;
  }

  /**
   * Add note to array of NOTES
   */
  submitNote() {
    // Check if note exist in array
    if (NOTES.includes(this.note)) {
      this.updateNote();
    } else {
      NOTES.push(this.note);
      this.note = new Note();
      // Emit to new note component to clear url value and set video component to false
      this.noteSubmitted.emit({clearUrl: undefined, clearVid: false, clearMarkdown: ''});
    }

  }

  /**
   * Update existing notes
   */
  updateNote() {
    const index = NOTES.findIndex(x => x.title === this.note.title);
    NOTES[index] = this.note;
  }

  deleteNote() {
    const index = NOTES.findIndex(x => x.title === this.note.title);
    // Check if note exist, if not, it is a new note
    if (index === -1) {
      // Clear new note fields and reset video status
      this.emitClear();
    } else {
      NOTES.splice(index, 1);
      this.emitClear();
    }
  }

}
