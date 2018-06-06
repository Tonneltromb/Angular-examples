import {Component} from '@angular/core';
import {Pen} from '../../model/pen.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './forms-page.component.html'
})
export class FormsPageComponent {
  pen: Pen = new Pen('', '');
  colors = [{label: 'red', name: 'red'}, {label: 'blue', name: 'blue'}, {label: 'green', name: 'green'}];
  submitForm(form: HTMLFormElement) {
    console.log(form);
  }
}
