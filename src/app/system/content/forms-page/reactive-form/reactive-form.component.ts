import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
private form: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      'notebookName': new FormControl(''),
      'sheetCount': new FormControl(10)
    });
  }
}
