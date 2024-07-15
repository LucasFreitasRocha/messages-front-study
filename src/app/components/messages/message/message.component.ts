import { Component, Input, OnInit } from '@angular/core';
import { MessageInterface } from '../interfaces';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() message!: MessageInterface;
  @Input() listaFavoritos: MessageInterface[] = [];

  constructor(private service: MessageService) {}

  ngOnInit(): void {}

  larguraMessage(): string {
    if (this.message?.conteudo.length >= 256) {
      return 'message-g';
    }
    return 'message-p';
  }

  mudarIconeFavorito(): string {
    if (this.message.favorito == false) {
      return 'inativo';
    }
    return 'ativo';
  }

  atualizarFavoritos() {
    this.message.favorito = !this.message.favorito;
    this.service
      .edit(this.message)
      .subscribe(() =>
        this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.message), 1)
      );
    console.log(this.message.favorito);
  }
}
