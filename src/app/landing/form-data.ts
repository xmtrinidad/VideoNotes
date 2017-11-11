export class FormInfo {
  formTitle: string;
  formInputs: [ {label: string, type: string, id: string} ];
  buttons: [{name: string, color: string}];
}

export const forms: FormInfo[] = [
  {
    formTitle: 'Sign-In',
    formInputs: [
      {label: 'Email:', type: 'email', id: 'user_email'},
      {label: 'Password:', type: 'password', id: 'user_pass'}
    ],
    buttons: [
      {name: 'Sign-In', color: 'primary'},
      {name: 'Register', color: 'accent'}
    ]
  },
  {
    formTitle: 'Register',
    formInputs: [
      {label: 'Enter Email:', type: 'email', id: 'user_enter'},
      {label: 'Enter Password', type: 'password', id: 'user_pw'}
    ],
    buttons: [
      { name: 'Sign-Up', color: 'primary'},
      { name: 'Cancel', color: 'warn'}
    ]
  }
];
