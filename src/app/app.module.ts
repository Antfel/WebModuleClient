import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { GrowlModule } from 'primeng/growl';
import { CaptchaModule } from 'primeng/captcha';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { Message } from 'primeng/api';

import { AppComponent } from './app.component';
import { PedidoServicioService } from './service/pedido-servicio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CaptchaModule,
    AccordionModule,
    GrowlModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    TableModule
  ],
  providers: [PedidoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
