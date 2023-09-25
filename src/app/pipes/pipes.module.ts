import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesDocsComponent } from './pipes-docs.component';

const routes = [
  {
    path: '',
    component: PipesDocsComponent
  }
];


@NgModule({
  declarations: [
    PipesDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PipesModule { }
