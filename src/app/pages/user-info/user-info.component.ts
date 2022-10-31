import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users:any[]=[]
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getUsers().subscribe( (res) =>{
      console.log(res.data)
      this.users = res.data
    })
  }

}
