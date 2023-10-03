import { Component, OnInit } from '@angular/core';
import { RtdbService } from 'src/app/shared/rtdb.service';

@Component({
  selector: 'app-classview',
  templateUrl: './classview.component.html',
  styleUrls: ['./classview.component.css']
})
export class ClassviewComponent implements OnInit{

  clsCountarr:any=[];
  constructor(private rtdb:RtdbService){}

  ngOnInit(): void {
    this.rtdb.showData().valueChanges().subscribe(m=>{
      console.log('data',m)
      this.clsCountarr=m;
      console.log('arr',this.clsCountarr)
    })
  }

}
