import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesListComponent } from './pipes-list.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: PipesListComponent
  }
];


@NgModule({
  declarations: [
    PipesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
