import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, FormArray,FormBuilder, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.styl']
})
export class FirstStepComponent implements OnInit {
  //drag and drop config 
  timePeriods = [
    'Bronze age',
    'Iron age',
    'Middle ages',
    'Early modern period',
    'Long nineteenth century',
    '1','2','3','4','5','6'
  ];
  regExDecimals : RegExp = new RegExp(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/);
  regExNumbersIntegerPos : RegExp = new RegExp(/^[0-9]\d*$/);

  @Output() firstStep = new FormGroup({
    //images formControl
    prodCode : new FormControl('0',
    [
      Validators.pattern(this.regExNumbersIntegerPos),
      Validators.maxLength(4)
    ]),
    prodTitle : new FormControl('0',[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(250)
    ]),
    prodCateg : new FormControl('0',[
      Validators.required
    ]),
    prodStockAmount :  new FormControl('0',[
      Validators.required,
      Validators.pattern(this.regExNumbersIntegerPos),
      Validators.minLength(1),
      Validators.maxLength(2)
    ]),
    prodPrice : new FormControl('0',[
      Validators.required,
      Validators.pattern(this.regExDecimals),
      Validators.minLength(1),
      Validators.maxLength(7)
    ]),
    prodDiscount : new FormControl('0',[
      Validators.pattern(this.regExNumbersIntegerPos),
      Validators.minLength(1),
      Validators.maxLength(3)
     ]),
    charactList : new FormControl('0'),
    prodCharacteristics : new FormArray([
    
    ]),
  });
  categList : string[] = [
    'Moda Feminina',
    'Moda Masculina',
    'Telefones & Telecomunicações',
    'Computadorese Escritório',
    'Eletrônicos',
    'Joias e Relógios',
    'Casa, pet e Eletrodomésticos',
    'Bolsas e Calçados',
    'Brinquedos e Infantil',
    'Diversão Ao Ar Livre',
    'Saúde, Beleza e Cabelo',
    'Auto e Moto',
    'Reforma e Ferramentas'
  ]
  charactListNames: string[] = [ 
  "Size"     ,
  "Material" ,
  "Model"    , 
  "Version"  ,
  "Storage"  ,
  "Power"    ,
  "Voltage"  ,
  "Maker"    ,
  "Conjunto" ,
  "Condition"
];
  items : string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
 
  constructor(private formBuilder :FormBuilder,) 
  {

  }
  
  ngOnInit() {
    
  }
  /**
   * @description emit the value from the product FormGroup
   */
  getProdFormData() : FormGroup {
   return this.firstStep;
  }
  images  ;     //['assets/placeholder-images-480x480.png'];
  imageLists = [];
  displayedImage ; 
  addImage(event) {
    this.imageLists = []
    if (event.target.files && event.target.files[0]) {

      for (let index = 0; index < event.target.files.length ; index++) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[index]); // read file as data url
        reader.onload = (e) => { // called once readAsDataURL is completed
          this.imageLists[index] = e.target.result;
        } 
      }
    }
  }


  removeImage(index){
    let firstSection = [];
    let secondSection = [];
    let result = [];

    firstSection = this.imageLists.slice(0,index);
    secondSection =  this.imageLists.slice(index + 1 , this.imageLists.length)

    this.imageLists = firstSection.concat(secondSection) ;
  }

  /**
   * @returns An Buffer Array of DataUrlFile
   */
  public get getProductImages() {
    return this.imageLists;
  }
  selectedCategValue(event){
    this.firstStep.controls.prodCateg.setValue(event.value);
    console.log(this.firstStep.controls.prodCateg.value)
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
  }
}
