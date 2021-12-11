import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommService } from './comm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'comm';
  forms:FormGroup ;

  
  ngOnInit(): void {
    this.forms = this.formBuilder.group(
      {
        twopercent:[0],
        tenpercent:[0],
        twopercenttax:[0],
        tenpercenttax:[0],
        totaltax:[0],
      }
    )
      
  }



  calculateTwoPercent(){
    let two = this.forms.get('twopercent').value * 0.02;
    this.forms.get('twopercenttax').setValue(two);
    this.calculateTotal();
  }

  calculateTen(){
    let ten = this.forms.get('tenpercent').value * 0.1;
    this.forms.get('tenpercenttax').setValue(ten);
    this.calculateTotal();
  }

  calculateTotal(){
    let total = this.forms.get('twopercenttax').value +  this.forms.get('tenpercenttax').value;
    this.forms.get('totaltax').setValue(total);
  }

  currentVale:number = 1;

  constructor(public commSer:CommService, private formBuilder:FormBuilder){
    commSer.nextNo.subscribe(
      res=>{
        this.currentVale = res;
      }
    )

  }
}
