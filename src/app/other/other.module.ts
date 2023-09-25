import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherDocsComponent } from './other-docs.component';

const routes = [
  {
    path: '',
    component: OtherDocsComponent
  }
];


@NgModule({
  declarations: [
    OtherDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OtherModule { }
