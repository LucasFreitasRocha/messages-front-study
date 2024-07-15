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
  page: number = 1;
  hasMoreMessages: boolean = true;
  filter: string = '';
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService
      .list(this.page, this.filter)
      .subscribe((messages) => (this.messages = messages));
  }

  loadMoreMessage() {
    this.messageService.list(++this.page, this.filter).subscribe((messages) => {
      this.messages.push(...messages);
      if (!messages.length) {
        this.hasMoreMessages = false;
      }
    });
  }

  findMessage() {
    this.hasMoreMessages = true;
    this.page = 1;
    this.messageService.list(this.page, this.filter).subscribe((messages) => {
      this.messages = messages;
    });
  }
}
