import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import {NewNoteService} from '../new-note/new-note.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NoteContentComponent} from '../note-content/note-content.component';

@Component({
  selector: 'app-preview-note',
  templateUrl: './preview-note.component.html',
  styleUrls: ['./preview-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewNoteComponent implements OnInit {

  markdown: string;

  constructor(private newNoteService: NewNoteService,
              public dialogRef: MatDialogRef<NoteContentComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.markdown = this.newNoteService.note.markdown;
  }

}
