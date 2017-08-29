import { Directive, HostListener, HostBinding,
  ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
   // this._render.setElementStyle(this._elementRef.nativeElement, 'background-color','yellow');
   this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
   // this._render.setElementStyle(this._elementRef.nativeElement, 'background-color','white');
   this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: string;
  // outro metodo

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor: string;

 /* constructor(private _elementRef: ElementRef,
    private _render: Renderer) {
    
   }*/

   constructor() {
    
   }

}
