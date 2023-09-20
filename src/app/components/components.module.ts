import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { ComponentsListComponent } from './components-list.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DateUtilsComponent } from '../services/date-utils/date-utils.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PomodoroComponent } from './pomodoro/pomodoro.component';

const routes = [
  {
    path: '',
    component: ComponentsListComponent
  }
];

@NgModule({
  declarations: [
    CardComponent,
    ComponentsListComponent,
    AccordionComponent,
    ProgressBarComponent,
    DateUtilsComponent,
    StarRatingsComponent,
    PomodoroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentsModule { }
