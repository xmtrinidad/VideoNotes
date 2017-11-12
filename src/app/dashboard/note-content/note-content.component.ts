import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import {SaveNoteComponent} from '../new-note/save-note/save-note.component';
import {NewNoteService} from '../new-note/new-note.service';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteContentComponent implements OnInit {
  markdown = '';
  preview = false;

  constructor(public dialog: MatDialog, private newNoteService: NewNoteService) { }

  ngOnInit() {
    // Clear markdown text when note is saved
    this.newNoteService.noteSubmitted.subscribe((status) => this.markdown = status.clearMarkdown);
  }

  togglePreview() {
    this.preview = this.preview !== true;
  }

  /**
   * Saves markdown and opens dialog
   */
  saveResource() {
    this.newNoteService.newNote.markdown = this.markdown;
    const dialogRef = this.dialog.open(SaveNoteComponent, {width: '430px'});
  }

}
