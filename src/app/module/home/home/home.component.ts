import { Component ,Output, EventEmitter, OnInit } from '@angular/core';
import { RtdbService } from 'src/app/shared/rtdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private rtdb:RtdbService){}

  ngOnInit(): void {
    this.rtdb.showData().valueChanges().subscribe(m=>{
      console.log('data',m)
    })
  }

}
