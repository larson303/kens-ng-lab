import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { GuardsDocsComponent } from './guards-docs.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: GuardsDocsComponent
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    GuardsDocsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GuardsModule { }
