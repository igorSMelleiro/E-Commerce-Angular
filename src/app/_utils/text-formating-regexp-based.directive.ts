import { Directive, ElementRef, HostBinding, Input,Renderer2, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormatRegExp]'
})
export class TextFormatingRegexpBasedDirective {

  @Input('appInputFormatRegExp') regExp :  string = '' ;
  @Input() replaceTo : string = '';
    constructor(private el: ElementRef, private renderer : Renderer2) { 
  }

  @HostListener('keypress', ['$event.target.value']) onKeyUp(value) {
    this.changeText(value)
 }
  

  changeText(value : string) {
    console.log(this.el.nativeElement);
    let reg = new RegExp(this.regExp);
    console.log(typeof reg);
    this.el.nativeElement.value = value.replace(reg,this.replaceTo);
  }
}
