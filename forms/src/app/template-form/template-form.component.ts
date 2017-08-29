
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .map(res => res)
    .subscribe(dados => { 
      console.log(dados);
      form.form.reset();
    });
    
    //console.log(this.usuario);
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {      
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
      }

    }

    consultaCEP(cep, form){
      cep = cep.replace(/\D/g,'');
      console.log(cep);
      if(cep != ""){
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        this.resetaDadosFormulario(form);

        if(validacep.test(cep)) {
          this.http.get("//viacep.com.br/ws/"+cep+"/json")
          .map(dados => dados.json())
          .subscribe(dados => this.pupulaDadosForm(dados, form));
        }

      }
    }

    pupulaDadosForm(dados, formulario){
      /*form.setValue({
          nome: formulario.value.nome,
          email: formulario.value.email,
          endereco: {
            rua: dados.logradouro,
            cep: dados.cep,
            numero: '',
            complemento: dados.complemento ,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
      });*/

      formulario.form.patchValue({
        endereco: {
            rua: dados.logradouro,
            cep: dados.cep,            
            complemento: dados.complemento ,
            bairro: dados.bairro,
            cidade: dados.localidade,
            estado: dados.uf
          }
      });

      //console.log(form);

    }

    resetaDadosFormulario(formulario){
      formulario.form.patchValue({
        endereco: {
            rua: null,
            cep: null,            
            complemento: null,
            bairro: null,
            cidade: null,
            estado: null
          }
      });
    }

  }


