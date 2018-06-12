import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[back]'
})
export class BackgroundColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostListener('click', ['$event']) onClick(event) {
    const background = event.target.backgroundColor;
    const fontColor = event.target.color;
    this.backgroundColor = 'blue';
    this.color = 'green';
    setTimeout(() => {
      this.backgroundColor = background;
      this.color = fontColor;
    }, 3000);
  }
}
