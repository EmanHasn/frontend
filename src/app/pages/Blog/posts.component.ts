import { Component, OnInit } from '@angular/core';
// import { Post } from 'src/app/interface/post';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: []
})
export class PostsComponent implements OnInit {
  posts:any []= []
  constructor(private global:GlobalService) {}

  ngOnInit(): void {
    this.global.getPosts().subscribe((res) =>{
      console.log(res.data)
      this.posts = res.data
    })
  }

}
