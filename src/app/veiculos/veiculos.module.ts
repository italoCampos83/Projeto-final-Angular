import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosComponent } from './veiculos.component';
import { VeiculosService } from './veiculos.service';

@NgModule({
  declarations: [
    VeiculosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VeiculosComponent
  ],
  providers: [
    VeiculosService
  ],

})
export class VeiculosModule { }
