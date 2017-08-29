import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(

    private formBuilder: FormBuilder,
    private http: Http
    ) { }

  ngOnInit() {

    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),

      endereco: new FormGroup({
        cep: new FormControl(null)
      })

    }); */

    this.formulario = this.formBuilder.group({
      nome:[null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, Validators.required ],
        numero: [null, Validators.required ],
        complemento: [null, Validators.required],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })

    });

  }

  onSubmit(){
    console.log(this.formulario.value);

    if(this.formulario.valid){
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .map(res => res)
      .subscribe(dados => {
        console.log(dados);
        //reseta o form
        //this.formulario.reset();
        this.resetar();
      },
      (error: any) => alert('erro'));
    }else{
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(campo => {
        console.log(campo);
        const controle = formGroup.get(campo);
        controle.markAsDirty();
        if(controle instanceof FormGroup){
          this.verificaValidacoesForm(controle);
        }
      });
  }

  resetar(){
    this.formulario.reset();
  }

  aplicaCssErro(campo: string){
    return {      
        'has-error': this.verificaValidTouched(campo),
        'has-feedback': this.verificaValidTouched(campo)
      }

   }

  verificaValidTouched(campo: string){

    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;    
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('email');
    if(campoEmail.errors){
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  consultaCEP(){

      let cep = this.formulario.get('endereco.cep').value;

      cep = cep.replace(/\D/g,'');
      console.log(cep);
      if(cep != ""){
        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        this.resetaDadosFormulario();

        if(validacep.test(cep)) {
          this.http.get("//viacep.com.br/ws/"+cep+"/json")
          .map(dados => dados.json())
          .subscribe(dados => this.pupulaDadosForm(dados));
        }

      }
    }

    pupulaDadosForm(dados){
        
        this.formulario.patchValue({
          endereco: {
              rua: dados.logradouro,
              cep: dados.cep,            
              complemento: dados.complemento ,
              bairro: dados.bairro,
              cidade: dados.localidade,
              estado: dados.uf
            }
        });

        this.formulario.get('nome').setValue('Rafael');
                
      }

    resetaDadosFormulario(){
      this.formulario.patchValue({
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
