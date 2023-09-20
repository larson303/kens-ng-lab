import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OtherListComponent } from './other-list.component';

const routes = [
  {
    path: '',
    component: OtherListComponent
  }
];


@NgModule({
  declarations: [
    OtherListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OtherModule { }
