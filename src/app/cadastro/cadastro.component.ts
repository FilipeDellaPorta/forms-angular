import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultaCEP(event: any) {
    const cep = event.target.value;
    return this.consultaCepService
      .getConsultaCep(cep)
      .subscribe((resultado: any) => {
        console.log(resultado);
      });
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso']);
      console.log(form.controls);
    } else {
      alert('Formulário inválido.');
    }
  }
}
