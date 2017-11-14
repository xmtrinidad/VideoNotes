import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LandingFormComponent } from './landing/landing-form/landing-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { NavDropdownComponent } from './nav/nav-dropdown/nav-dropdown.component';
import { NewNoteComponent } from './dashboard/new-note/new-note.component';
import { VideoComponent } from './dashboard/video/video.component';
import { NoteContentComponent } from './dashboard/note-content/note-content.component';
import { SaveNoteComponent } from './dashboard/save-note/save-note.component';
import { NoteListComponent } from './dashboard/note-list/note-list.component';

import {NavService} from './nav/nav.service';
import {LandingService} from './landing/landing.service';
import { NewNoteService } from './dashboard/new-note/new-note.service';



import { SafePipe } from './dashboard/video/safe.pipe';
import { ThumbnailPipe } from './thumbnail.pipe';
import { EmbedPipe } from './embed.pipe';
import { DeleteNoteComponent } from './dashboard/delete-note/delete-note.component';
import { PreviewNoteComponent } from './dashboard/preview-note/preview-note.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingFormComponent,
    DashboardComponent,
    NavComponent,
    NavDropdownComponent,
    NewNoteComponent,
    VideoComponent,
    SafePipe,
    NoteContentComponent,
    SaveNoteComponent,
    NoteListComponent,
    ThumbnailPipe,
    EmbedPipe,
    DeleteNoteComponent,
    PreviewNoteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MarkdownToHtmlModule.forRoot()
  ],
  entryComponents: [
    SaveNoteComponent,
    PreviewNoteComponent,
    DeleteNoteComponent
  ],
  providers: [LandingService, NavService, NewNoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
