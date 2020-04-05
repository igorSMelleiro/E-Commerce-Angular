import { Component, OnInit, Input } from '@angular/core';
import { IProductFullData } from '../Product-interface';

@Component({
  selector: 'app-confirm-form',
  templateUrl: './confirm-form.component.html',
  styleUrls: ['./confirm-form.component.styl']
})
export class ConfirmFormComponent implements OnInit {

  @Input() regFormData : IProductFullData = {
    prod_specs : null,
    prod_address :null
  };
  constructor() { }

  ngOnInit() {
  }

}
