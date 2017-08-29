import { Directive, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[highlightDire]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onmouseleave(){
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

    @Input() defaultColor: string = 'white';
    @Input('highlightDire') highlightColor: string = 'yellow';

    constructor() { }

    ngOnInit() {
      this.backgroundColor = this.defaultColor;
    }

  }
