import {Component} from '@angular/core';
import {Pen} from '../../../model/pen.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html'
})
export class TdFormComponent {
  pen: Pen = new Pen('name', '');
  colors = ['red', 'blue', 'green'];

  addPen(form: NgForm) {}
}
