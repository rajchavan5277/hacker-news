import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterailModule } from '../materail/materail.module';
import { FormsModule } from '@angular/forms';
import { 
  HeaderComponent, 
  FooterComponent
} from './';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, GridComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterailModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterailModule,
    HeaderComponent, 
    FooterComponent,
    GridComponent
  ]
})
export class SharedModule { }
