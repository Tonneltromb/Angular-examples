import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ValidatorsComponent} from '../../../common/validators.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  private form: FormGroup;



  ngOnInit() {
    this.form = new FormGroup({
      'notebookName': new FormControl('', [ValidatorsComponent.nameValidator]),
      'sheetCount': new FormControl()
    });
  }
}
