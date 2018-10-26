import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import { DropdownModule, PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FieldsetModule,
    DropdownModule
  ]
})

export class PrimeNgImports {}
