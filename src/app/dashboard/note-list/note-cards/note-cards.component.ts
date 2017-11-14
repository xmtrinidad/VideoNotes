import {Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import {Note} from '../../../note';

@Component({
  selector: 'app-note-cards',
  templateUrl: './note-cards.component.html',
  styleUrls: ['./note-cards.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteCardsComponent implements OnInit {
  @Input() note: Note;
  @Output() viewClicked = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  emitViewClicked(noteClicked: Note) {
    this.viewClicked.emit(noteClicked);
  }

}
