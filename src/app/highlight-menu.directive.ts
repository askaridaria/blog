import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMenu]'
})
export class HighlightMenuDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.backgroundColor ="black"
  }

}
