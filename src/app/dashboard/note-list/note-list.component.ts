import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {NewNoteService} from '../new-note/new-note.service';
import { Note } from '../../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteListComponent implements OnInit {
  notes: Note[];

  constructor(private newNoteService: NewNoteService) { }

  ngOnInit() {
    this.newNoteService.getNotes().subscribe((notes) => this.notes = notes);
  }

}
