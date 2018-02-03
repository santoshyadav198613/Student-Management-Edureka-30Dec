import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log('This is hover directive');
    console.log(element.nativeElement);

  }

  @HostListener('mouseover') onmouseover() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "red");
  }

  @HostListener('mouseout') onmouseout() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "white");
  }

  @HostListener('click') onclick() {
    this.renderer.setStyle(this.element.nativeElement, "background-color", "yellow");
  }

}
