import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  data: any[]
  constructor(private appService: AppService){
    this.data = []
  }
  ngOnInit(){
    this.appService.getAll().then(
      (data) => {
        console.log(data)
        this.data = data
      }
    )
  }
}
