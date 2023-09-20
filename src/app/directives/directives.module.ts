import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectivesListComponent } from './directives-list.component';

const routes = [
  {
    path: '',
    component: DirectivesListComponent
  }
];

@NgModule({
  declarations: [
    DirectivesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
