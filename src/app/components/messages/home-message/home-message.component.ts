import { Component, OnInit } from '@angular/core';
import { MessageInterface } from '../interfaces';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home-message',
  templateUrl: './home-message.component.html',
  styleUrls: ['./home-message.component.css'],
})
export class HomeMessageComponent implements OnInit {
  messages: MessageInterface[] = [];
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService
      .list()
      .subscribe((messages) => (this.messages = messages));
  }
}
