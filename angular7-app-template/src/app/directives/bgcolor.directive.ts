import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgcolorDirective {

  constructor(private el:ElementRef,private r:Renderer2) {
    console.log("BgColorDirective created....")
   }

   
  @Input()
  set bgColor(color:string){
    console.log("In setBgColor :"+color);
    this.r.setStyle(this.el.nativeElement,"background-color",color);
  }



}
