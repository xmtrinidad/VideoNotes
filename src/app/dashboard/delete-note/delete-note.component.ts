import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NoteContentComponent } from '../note-content/note-content.component';
import { NewNoteService } from '../new-note/new-note.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteNoteComponent implements OnInit {

  constructor(
    private newNoteService: NewNoteService,
    public dialogRef: MatDialogRef<NoteContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  delete() {
    this.newNoteService.deleteNote();
  }

}
