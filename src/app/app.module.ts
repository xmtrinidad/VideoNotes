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

import {NavService} from './nav/nav.service';
import {LandingService} from './landing/landing.service';
import { NewNoteComponent } from './dashboard/new-note/new-note.component';
import { VideoComponent } from './dashboard/video/video.component';
import { SafePipe } from './dashboard/new-note/safe.pipe';
import { NoteContentComponent } from './dashboard/note-content/note-content.component';
import { SaveNoteComponent } from './dashboard/new-note/save-note/save-note.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    MarkdownToHtmlModule.forRoot()
  ],
  entryComponents: [
    SaveNoteComponent
  ],
  providers: [LandingService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
