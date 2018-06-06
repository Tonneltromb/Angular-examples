import {Component} from '@angular/core';
import {Pen} from '../../../model/pen.model';

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html'
})
export class TdFormComponent {
  pen: Pen = new Pen('', '');
  colors = ['red', 'blue', 'green'];

}
