import {NgModule} from '@angular/core';
import {PrimeNgImports} from '../../common/primeNg-imports';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormsPageComponent} from './forms-page.component';
import {TdFormComponent} from './td-form/td-form.component';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgImports,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormsPageComponent,
    TdFormComponent,
    ReactiveFormComponent
  ]
})
export class FormsPageModule { }
