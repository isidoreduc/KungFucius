import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // injects an element reference and a renderer to be able to add a css class to highlight some elements on the page
  constructor(private el: ElementRef,
    private rend: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.rend.addClass(this.el.nativeElement, 'highlight');
  }

  @HostListener('mouseleave') onmouseleave(){
    this.rend.removeClass(this.el.nativeElement, 'highlight');
  }

  // @HostListener('mouseenter') onMouseEnter1(){
  //   this.rend.addClass(this.el.nativeElement, 'socialmediahighlight');
  // }

  // @HostListener('mouseleave') onmouseleave1(){
  //   this.rend.removeClass(this.el.nativeElement, 'socialmediahighlight');
  // }
}
