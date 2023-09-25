import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocsComponent } from './directive-docs.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: DirectiveDocsComponent
  }
];

@NgModule({
  declarations: [
    DirectiveDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
