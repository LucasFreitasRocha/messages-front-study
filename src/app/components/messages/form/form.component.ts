import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { MessageInterface } from '../interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  message: MessageInterface = {
    conteudo: '',
    autoria: '',
    modelo: '',
  };
  title = 'Adicione';

  constructor(
    private router: Router,
    private service: MessageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.findById(parseInt(id!)).subscribe((message) => {
        this.message = message;
      });
      this.message.id = parseInt(id!);
      this.title = 'Edite';
    }
  }

  createMessage() {
    if (this.message.id) {
      this.service.edit(this.message).subscribe(() => {
        this.router.navigate(['']);
      });
    } else {
      this.service.create(this.message).subscribe(() => {
        this.router.navigate(['']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['']);
  }
}
