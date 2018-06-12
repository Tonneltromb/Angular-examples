import {NgModule} from '@angular/core';
import {SimpleBackgroundColorDirective} from './background-color.directive';
import {BackgroundCustomDirective} from './background-custom.directive';
import {BackgroundColorDirective} from './bgnd-color.directive';

@NgModule({
  declarations: [
    SimpleBackgroundColorDirective,
    BackgroundCustomDirective,
    BackgroundColorDirective
  ],
  exports: [
    SimpleBackgroundColorDirective,
    BackgroundCustomDirective,
    BackgroundColorDirective
  ]
})
export class DirectivesModule { }
