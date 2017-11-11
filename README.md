# VideoNotes

* Enter a youtube URL and take notes in markdown
* Save your resources and review your notes at anytime

# Documentation

From a development standpoint, my goal is to improve my web development and UI/UX skills.  

This project uses Angular and Angular Material, with Bootstrap for some layout components.  

# Angular Material
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
