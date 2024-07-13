import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { MessageInterface } from '../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  title = 'Adicione';

  form!: FormGroup;

  constructor(
    private router: Router,
    private service: MessageService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0],
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      modelo: ['modelo1'],
    });
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.findById(parseInt(id!)).subscribe((message) => {
        this.form.get('conteudo')?.setValue(message.conteudo);
        this.form.get('modelo')?.setValue(message.modelo);
        this.form.get('autoria')?.setValue(message.autoria);
      });
      this.form.get('id')?.setValue(parseInt(id!));
      this.title = 'Edite';
    }
  }

  createMessage() {
    if (this.form.valid) {
      if (this.form.get('id')?.value) {
        this.service.edit(this.form.value).subscribe(() => {
          this.router.navigate(['']);
        });
      } else {
        this.service.create(this.form.value).subscribe(() => {
          this.router.navigate(['']);
        });
      }
    }
  }

  cancelar() {
    this.router.navigate(['']);
  }

  enableButton(): string {
    if (this.form.valid) {
      return 'botao';
    } else {
      return 'botao__desabilitado';
    }
  }
}
