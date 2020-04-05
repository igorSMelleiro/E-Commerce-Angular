import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-expandable-res',
  templateUrl: './inner-expandable-res.component.html',
  styleUrls: ['./inner-expandable-res.component.styl']
})
export class InnerExpandableResComponent implements OnInit {

  @Input() prodData ;
  constructor() { }

  ngOnInit() {
    
  }

}
