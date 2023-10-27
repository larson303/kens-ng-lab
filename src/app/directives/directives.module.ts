import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocsComponent } from './directive-docs.component';
import { RouterModule } from '@angular/router';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { CardModule } from '../common/card/card.module';
import { DebounceClick2Directive } from './debounce-click2.directive';

const routes = [
  {
    path: '',
    component: DirectiveDocsComponent
  }
];

@NgModule({
  declarations: [
    DirectiveDocsComponent,
    DebounceClickDirective,
    DebounceClick2Directive
  ],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(routes)
  ]
})
export class DirectivesModule { }
