import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookOndemandComponent } from './book-ondemand/book-ondemand.component';

const routes: Routes = [];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookNowRoutingModule { }
