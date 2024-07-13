import { Component, Input, OnInit } from '@angular/core';
import { MessageInterface } from '../interfaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() message!: MessageInterface;
  constructor() {}

  ngOnInit(): void {}

  larguraMessage(): string {
    if (this.message?.conteudo.length >= 256) {
      return 'message-g';
    }
    return 'message-p';
  }
}
