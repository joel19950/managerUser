import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
    id:any;
  constructor(public activeted:ActivatedRoute) {

    
    console.log('teste app'+this.activeted);
    this.id=this.activeted.snapshot.paramMap.get('id');
    console.log('test app  '+this.id)
  
  
  }

  ngOnInit(): void {
  }



}
