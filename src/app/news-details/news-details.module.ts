import { MaterailModule } from './../materail/materail.module';
import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsFeedsComponent } from './';

const routes: Routes = [
  {path: '', component : NewsFeedsComponent}
]

@NgModule({
  declarations: [NewsFeedsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SharedModule,
    NewsFeedsComponent
  ]
})
export class NewsDetailsModule { }
