import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlighBis]'
})
export class HighlighBisDirective {

  constructor(private el: ElementRef,
    private rend: Renderer2) { }



  @HostListener('mouseenter') onMouseEnter1(){
    this.rend.addClass(this.el.nativeElement, 'socialmediahighlight');
  }

  @HostListener('mouseleave') onmouseleave1(){
    this.rend.removeClass(this.el.nativeElement, 'socialmediahighlight');
  }

}
