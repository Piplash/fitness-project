import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export default class CrearCuentaComponent {
  public crearCuentaForm: FormGroup;
  public labelErrores: string[] = [];
  

  constructor( private formBuilder: FormBuilder){
    this.crearCuentaForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      apellidoUsuario: ['', [Validators.required]],
      emailUsuario: ['', [Validators.required, Validators.email]],
      confirmacionEmailUsuario: ['', [Validators.required, Validators.email]],
      passwordUsuario: ['', [Validators.required]],
      confirmacionPasswordUsuario: ['', [Validators.required]]
    })
  }

  public validarCampos(formGroup: FormGroup): void {
    const nombre                = formGroup.get('nombreUsuario');
    const apellido              = formGroup.get('apellidoUsuario');
    const email                 = formGroup.get('emailUsuario');
    const confirmacionEmail     = formGroup.get('confirmacionEmailUsuario');
    const password              = formGroup.get('passwordUsuario');
    const confirmacionPassword  = formGroup.get('confirmacionPasswordUsuario');

    //Limpiar errores previos
    nombre?.setErrors(null);
    apellido?.setErrors(null);
    confirmacionEmail?.setErrors(null);
    confirmacionPassword?.setErrors(null);
    this.labelErrores = [];
  
    const errores: string[] = [];
  
    if (!nombre?.value) {
      nombre?.setErrors({ 'Campo Requerido': true });
      errores.push('Nombre es un campo obligatorio');
    }
  
    if (!apellido?.value) {
      apellido?.setErrors({ 'Campo Requerido': true });
      errores.push('Apellido es un campo obligatorio');
    }

    if(!email?.value || !confirmacionEmail?.value){
      email?.setErrors({ 'Campo Requerido': true });
      confirmacionEmail?.setErrors({ 'Campo Requerido': true });
      errores.push('Correo electrónico es un campo obligatorio')
    }else if(email?.value !== confirmacionEmail?.value){
      confirmacionEmail?.setErrors({ 'Correos no coinciden': true });
      errores.push('Correos no coinciden');
    }else if(email.errors || confirmacionEmail.errors){
      errores.push('Formato de correo inválido');
    }

    if(!password?.value || !confirmacionPassword?.value){
      password?.setErrors({ 'Campo Requerido': true });
      confirmacionPassword?.setErrors({ 'Campo Requerido': true });
      errores.push('Contraseña es un campo obligatorio')
    }else if(password?.value !== confirmacionPassword?.value){
      confirmacionPassword?.setErrors({ 'Contraseñas no coinciden': true });
      errores.push('Contraseñas no coinciden');
    }
  
    this.labelErrores = errores;
  }



  public crearCuenta(): void{
    console.log("CREAR CUENTA")
    this.validarCampos(this.crearCuentaForm);
    console.log("CC: ", this.crearCuentaForm);
  }
}
