import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public commSer:CommService) { }

  ngOnInit(): void {
  }

}
