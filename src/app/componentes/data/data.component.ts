import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service'
 
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() data:any
  person: any 

  constructor( private api:ApiService) { 
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
        console.log('https://bio.torre.co/api/bios/'+this.data)
        this.api.obteenrData(this.data).subscribe((datos)=> {
            this.person = datos
        })
    }

}
