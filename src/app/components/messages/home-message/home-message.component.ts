import { Component, OnInit } from '@angular/core';
import { MessageInterface } from '../interfaces';

@Component({
  selector: 'app-home-message',
  templateUrl: './home-message.component.html',
  styleUrls: ['./home-message.component.css'],
})
export class HomeMessageComponent implements OnInit {
  messages: MessageInterface[] = [
    {
      conteudo: 'hello world angular',
      autoria: 'Lucas',
      modelo: 'modelo2',
    },
    {
      conteudo: 'segunda mensagem',
      autoria: 'Lucas',
      modelo: 'modelo1',
    },
    {
      conteudo: 'novo teste',
      autoria: 'Lucas',
      modelo: 'modelo3',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
