import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css'
})
export default class RecuperarContrasenaComponent {
  public recuperarPasswordForm: FormGroup;

  constructor( private formBuilder: FormBuilder){
    this.recuperarPasswordForm = this.formBuilder.group({
      emailUsuario: ['', [Validators.required, Validators.email]]
    })
  }

  public recuperarPassword(){
    console.log(this.recuperarPasswordForm)
  }

}
