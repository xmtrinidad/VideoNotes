// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBs_7dyDt0HG-gWC5ahnJufhaT_XdVlQVM',
    authDomain: 'md-vid-notes.firebaseapp.com',
    databaseURL: 'https://md-vid-notes.firebaseio.com',
    projectId: 'md-vid-notes',
    storageBucket: 'md-vid-notes.appspot.com',
    messagingSenderId: '219621993765'
  }
};
