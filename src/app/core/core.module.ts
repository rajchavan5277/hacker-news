import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [ReactiveFormsModule, HttpClientModule, PageNotFoundComponent]
})
export class CoreModule { }
