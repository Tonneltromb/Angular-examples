import {NgModule} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/button';
import {FieldsetModule} from 'primeng/fieldset';
import {ColorPickerModule} from 'primeng/colorpicker';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FieldsetModule,
    ColorPickerModule,
    DropdownModule
  ],
  exports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    FieldsetModule,
    ColorPickerModule,
    DropdownModule
  ]
})

export class PrimeNgImports {}
