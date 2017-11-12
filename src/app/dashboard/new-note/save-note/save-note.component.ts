import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NoteContentComponent} from '../../note-content/note-content.component';
import {NewNoteService} from '../new-note.service';

@Component({
  selector: 'app-save-note',
  templateUrl: './save-note.component.html',
  styleUrls: ['./save-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SaveNoteComponent implements OnInit {
  title = '';
  category = '';

  constructor(private newNoteService: NewNoteService, public dialogRef: MatDialogRef<NoteContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    // Set title and category for editing
    this.title = this.newNoteService.note.title;
    this.category = this.newNoteService.note.category;
  }


  save() {
    this.newNoteService.note.title = this.title;
    this.newNoteService.note.category = this.category;
    this.newNoteService.submitNote();
  }


}
