import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';

import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep.service';


@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ CepService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
