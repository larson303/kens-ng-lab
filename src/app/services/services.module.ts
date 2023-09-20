import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './services-list.component';

import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: ServicesListComponent
  }
];


@NgModule({
  declarations: [
    ServicesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesModule { }
