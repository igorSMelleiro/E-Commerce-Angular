import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'editable',
  template: `<ng-container *ngTemplateOutlet=""></ng-container>`,
  styleUrls: ['./editable.component.styl']
})
export class EditableComponent implements OnInit {
  

  mode: 'view' | 'edit' = 'view';
  constructor() { }

  ngOnInit() {
  }

}
