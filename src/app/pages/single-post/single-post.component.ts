import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id:any
  singlepost:any
  constructor(private activated:ActivatedRoute ,private global:GlobalService) {
    this.id = activated.snapshot.paramMap.get("id")
    console.log(this.id)
    this.global.getSinglePost(this.id).subscribe((res)=>{
      console.log(res.data)
      this.singlepost = res.data
    })
   }

  ngOnInit(): void {
  }

}
