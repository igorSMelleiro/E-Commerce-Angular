import { Component, OnInit, OnChanges} from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-editable-info',
  templateUrl: './editable-info.component.html',
  styleUrls: ['./editable-info.component.styl']
})
export class EditableInfoComponent implements OnInit {
  constructor() { }


  sehable : boolean = true;
  
  characteristics = new FormControl();
  characteristicsList: string[] = ['Size', 'Material', 'Model', 'Version', 'Storage','Power','Voltage','Maker','Conjunto', 'Condition'];

  colors = new FormControl();
  colorsList : string[] = ['white','grey','black','red','blue','yellow','green','purple','cyan'];

  inStock = new FormControl(false);
  

  items : String[] = ['1','2','3','4','5','6'];

  getInSotck(stock:Boolean){
    console.log("In Stock : " + stock);
  }
  ngOnInit() {
  }
  
  test(){
    console.log(this.characteristics);
  }


}
