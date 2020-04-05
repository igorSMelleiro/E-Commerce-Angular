import { Directive,TemplateRef, ViewContainerRef, ElementRef,Renderer2 } from '@angular/core';

import { Observable } from 'rxjs';


@Directive({
  selector: '[editMode]'
})
export class EditModeDirective {

  constructor(template : ElementRef<any>, render : Renderer2 ) {

   }



}
