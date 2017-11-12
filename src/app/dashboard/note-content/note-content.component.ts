import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import {SaveNoteComponent} from '../new-note/save-note/save-note.component';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteContentComponent implements OnInit {
  markdown = '';
  preview = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  togglePreview() {
    this.preview = this.preview !== true;
  }

  saveResource() {
    const dialogRef = this.dialog.open(SaveNoteComponent, {width: '430px'});

  }

}
