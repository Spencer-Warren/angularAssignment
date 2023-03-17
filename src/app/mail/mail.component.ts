import { Component } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
  emails: Array<any>;

  constructor() {
    this.emails = [
      { sender: 'Bill', subject: 'You won 1,000,000 dollars!', date: 'Dec 7'},
      { sender: 'Ada', subject: 'Free pizza at club meeting', date: 'Dec 7'},
      { sender: 'John', subject: 'Last chance to register', date: 'Dec 6'},
      { sender: 'John', subject: 'Last chance to register', date: 'Dec 6'}
    ];
  }
}

