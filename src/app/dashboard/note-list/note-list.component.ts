import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NewNoteService} from '../new-note/new-note.service';
import { Note } from '../../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteListComponent implements OnInit {
  url: string;
  markdown: string;
  notes: Note[];
  cardSelected = false;

  constructor(private newNoteService: NewNoteService) { }

  ngOnInit() {
    this.newNoteService.getNotes().subscribe((notes) => this.notes = notes);
    // Remove video and markdown on delete and reset temp card view
    this.newNoteService.noteSubmitted.subscribe((status) => {
      this.url = status.clearUrl;
      this.markdown = status.clearMarkdown;
      this.cardSelected = status.clearVid;
    });
  }

  /**
   * View clicked note
   * @param {Note} note - the note clicked
   */
  viewNote(note: Note) {
    this.cardSelected = true; // hides temp card list
    this.url = note.url;
    this.markdown = note.markdown;
    this.newNoteService.view(note);
  }

}
