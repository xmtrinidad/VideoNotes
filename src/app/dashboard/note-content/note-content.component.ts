import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteContentComponent implements OnInit {
  markdown = '';
  preview = false;

  constructor() { }

  ngOnInit() {
  }

  togglePreview() {
    this.preview = this.preview !== true;
  }

}
