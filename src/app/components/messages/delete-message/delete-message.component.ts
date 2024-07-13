import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageInterface } from '../interfaces';

@Component({
  selector: 'app-delete-message',
  templateUrl: './delete-message.component.html',
  styleUrls: ['./delete-message.component.css'],
})
export class DeleteMessageComponent implements OnInit {
  message: MessageInterface = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  constructor(
    private service: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.findById(parseInt(id!)).subscribe((message) => {
      this.message = message;
    });
  }

  excluirPensamento() {
    if (this.message.id) {
      this.service.delete(this.message.id).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['']);
  }
}
