import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor(public router: Router) {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelar() {
    this.router.navigate(['']);
    alert('Ação cancelada!');
  }
}
