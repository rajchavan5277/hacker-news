import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterailModule } from '../materail/materail.module';
import { 
  HeaderComponent, 
  FooterComponent
} from './';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterailModule
  ],
  exports: [
    MaterailModule,
    HeaderComponent, 
    FooterComponent
  ]
})
export class SharedModule { }
