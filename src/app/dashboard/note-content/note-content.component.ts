import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import {SaveNoteComponent} from '../save-note/save-note.component';
import {NewNoteService} from '../new-note/new-note.service';
import {DeleteNoteComponent} from '../delete-note/delete-note.component';
import {PreviewNoteComponent} from '../preview-note/preview-note.component';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteContentComponent implements OnInit {
  @Input() markdown = '';
  preview = false;

  constructor(public dialog: MatDialog, private newNoteService: NewNoteService) { }

  ngOnInit() {
    // Clear markdown text when note is saved
    this.newNoteService.noteSubmitted.subscribe((status) => this.markdown = status.clearMarkdown);
  }

  previewResource() {
    this.newNoteService.note.markdown = this.markdown;
    const dialogRef = this.dialog.open(PreviewNoteComponent);
  }

  /**
   * Saves markdown and opens dialog
   */
  saveResource() {
    this.newNoteService.note.markdown = this.markdown;
    const dialogRef = this.dialog.open(SaveNoteComponent, {width: '430px'});
  }

  deleteResource() {
    this.dialog.open(DeleteNoteComponent);
  }

}
