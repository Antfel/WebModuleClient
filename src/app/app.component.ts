import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  consultaPedidoform: FormGroup;

  validadorCaptcha: any;

  msgs: Message[] = [];

  cols: any[];

  constructor(private fb: FormBuilder) {
    this.cols = [
      { field: 'descripcion', header: 'Descripción' },
      { field: 'fecha', header: 'Fecha de Pedido' },
      { field: 'precio', header: 'Precio' }
    ];

    this.validadorCaptcha = false;
    this.consultaPedidoform = this.fb.group({
      'celular': new FormControl('', Validators.required),
      'captcha': new FormControl('', Validators.required)
    });
  }

  showResponse(event) {
    console.log('validaCaptcha');
    this.consultaPedidoform.controls['captcha'].setValue('true');
    console.log(this.consultaPedidoform.controls['captcha'].value);
  }

  onSubmit(value: string) {
    if (!this.validadorCaptcha) {
      console.log(value);
    }
  }

}
