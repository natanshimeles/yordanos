import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  ngOnInit(): void {
  }

  currentVale:number = 1;

  constructor(public commSer:CommService){
    commSer.nextNo.subscribe(
      res=>{
        this.currentVale = res;
      }
    )

  }

}
