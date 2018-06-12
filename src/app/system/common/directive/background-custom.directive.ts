import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

class Params {
  constructor(public background: string,
              public fontColor: string) {}
}

@Directive({
  selector: '[backCustom]'
})
export class BackgroundCustomDirective {
  private oldBackground: string;
  private oldFontColor: string;
  @Input('backCustom') params: Params;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @HostListener('mouseenter', ['$event']) mouseEnter(event) {
    this.oldBackground = event.target.backgroundColor;
    this.oldFontColor = event.target.color;
    this.backgroundColor = this.params['background'] || this.oldBackground;
    this.color = this.params['fontColor'] || this.oldFontColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = this.oldBackground;
    this.color = this.oldFontColor;
  }
}
