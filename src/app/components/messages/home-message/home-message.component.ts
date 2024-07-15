import { Component, OnInit } from '@angular/core';
import { MessageInterface } from '../interfaces';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

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
  favoritos: boolean = false;
  listaFavoritos: MessageInterface[] = [];
  title: string = 'Meu Mural';
  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.messageService
      .list(this.page, this.filter, this.favoritos)
      .subscribe((messages) => (this.messages = messages));
  }

  loadMoreMessage() {
    this.messageService
      .list(++this.page, this.filter, this.favoritos)
      .subscribe((messages) => {
        this.messages.push(...messages);
        if (!messages.length) {
          this.hasMoreMessages = false;
        }
      });
  }

  findMessage() {
    this.hasMoreMessages = true;
    this.page = 1;
    this.messageService
      .list(this.page, this.filter, this.favoritos)
      .subscribe((messages) => {
        this.messages = messages;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.page = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listarFavoritos() {
    this.title = 'Meus Favoritos';
    this.favoritos = true;
    this.hasMoreMessages = true;
    this.page = 1;
    this.messageService
      .list(this.page, this.filter, this.favoritos)
      .subscribe((messages) => {
        this.messages = messages;
        this.listaFavoritos = messages;
      });
  }
}
