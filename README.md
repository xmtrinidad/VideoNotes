# This project is still in development; working on backend data service with Firestore.  Static implementation is functional.

# VideoNotes

* Enter a youtube URL and take notes in markdown
* Save your resources and review your notes



# Documentation

From a development standpoint, my goal is to improve my web development and UI/UX skills.  

This project uses Angular and Angular Material, with Bootstrap for some layout components.  

# New Things

| Section  | Source |
| ------------- | ------------- |
| Setting up a custom theme  | [link](#Setting-up-a-custom-theme)  |
| Dialogs/Modals | [link](#Dialogs/Modals)  |
| Using Pipes for converting URL | [link](#Pipes)  |

## Setting up a custom theme

The basic template for a custom theme using Angular material looks like this:
```css
@import '~@angular/material/theming';
@include mat-core();


$video-app-primary: mat-palette($mat-cyan);
$video-app-accent:  mat-palette($mat-amber);
$video-app-warn:    mat-palette($mat-red);

$video-app-theme: mat-light-theme($video-app-primary, $video-app-accent, $video-app-warn);


@include angular-material-theme($video-app-theme);
```

The first two lines:
```css
@import '~@angular/material/theming';
@include mat-core();
```

These are needed for a theme to be used.  The next three lines:
```css
$video-app-primary: mat-palette($mat-cyan);
$video-app-accent:  mat-palette($mat-amber);
$video-app-warn:    mat-palette($mat-red);
```
I chose the name *$video-app* to match the overall project, but these can be named anything.  The material colors need to be defined within the *mat-palette* mixin.

The three material colors are passed into the *$video-app-theme* variable using the *mat-light-theme* mixin.  With this mix-in, the project can easily be switched to a dark theme by using the *mat-dark-theme* mixin.

Finally, *angular-material-theme* is included, passing in the defined theme.

## Dialogs/Modals
([API LINK](https://material.angular.io/components/dialog/overview))

This was something I had trouble setting up initially but after following the docs and experimenting with the imports and components, I got it to work

### Steps
1. import MatDialogModule and place into module imports/exports of your app.module or material.module

2.  Create the dialog/modal component and the associated HTML

3. Inside the component that contains the dialog action (button click to open modal), import MatDialog and the component that contains the HTML/CSS of the modal
    *  For example, in this project my dialog component is called *SaveNoteComponent*.  This component is not placed anywhere in the app.  It is called from the *NoteContentComponent* that contains the button click that opens the modal.
  
4.  Inside the constructor of the component that contains the button click to open the modal, use dependency injection to get properties of the MatDialog import
     ```typescript
      constructor(public dialog: MatDialog) { }
      ```

5.  Inside the button click method create a dialogRef and use the dialog.open method to get the modal component.  The .open() method takes in the modal component and an option config parameter
    ```typescript
    const dialogRef = this.dialog.open(SaveNoteComponent, {width: '430px'});
    ```
    
6. Inside the modal component, add *Inject* to the import list from '@angular/core'
    ```typescript
    import { Component, OnInit, Inject } from '@angular/core';

7.  Inside the modal component, import *MatDialogRef* and *MAT_DIALOG_DATA*, both of which are imported from '@angular/material'
    ```typescript
    import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
    ```
    
 8.  Inside the modal component, import the component that is using the modal (For this example, *NoteContentComponent* uses the modal
 
 9.  Inside the constructor of the modal component use dependency injection to get MatDialogRef properties that are injected from the component that uses the modal.  Use the *@Inject* decorator to inject the MAT_DIALOG_DATA properties as well.  Below is an example of what all this looks like:
 
      ```typescript
        constructor( public dialogRef: MatDialogRef<NoteContentComponent>, 
                      @Inject(MAT_DIALOG_DATA) public data: any
        ) { }
      ```
10.  Finally, the app.module component needs to know about the modal components through its entryComponents meta data.  Add entryComponents meta data to @NgModule:
      ```typescript
        entryComponents: [
            SaveNoteComponent
          ],
      ```
      
# Pipes

For this project, a youtube link is entered but needs to be converted to an embed in order to show the video in the app.

The regular expression used to extract the ID can be found [here](https://gist.github.com/takien/4077195)

## Generating Pipes

To generate a new pipe using the Angular CLI use the following command:
```
ng g p pipe-name
```

Inside the pipe is an @Pipe decorator with the name of the pipe.  This pipe contains a class and a transform method.  The transform method takes in a parameter.  For this example, the youtubeUrl is the parameter.

The transform method returns the following:
```typescript
return `http://img.youtube.com/vi/${this.YouTubeGetID(youtubeUrl)}/maxresdefault.jpg`;
```

The Video ID is inserted into the url string, which is the default string to get the max resolution image associated with the youtube video

Using this pipe in HTML is simple, it requires the youtubeUrl then a pipe charater (|) and a call to the pipe.  Here's an example of how the pipe is used to convert the url submitted to a thumbnail:
```HTML
<img mat-card-image src="{{note.url | thumbnail}}" alt="Youtube image">
```

The src attribute uses string interpolation to get the note.url, passes it through the pipe ( the pipe character) and the pipe used is called 'thumbnail'.  The returned URL is a valid maxresdefault image associated with the video.


