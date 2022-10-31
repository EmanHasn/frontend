import { Component, Input, OnInit } from '@angular/core';
// import { Post } from 'src/app/interface/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() singleUnit:any
  img:any = "assets/feedback1.PNG"

  constructor() { }

  ngOnInit(): void {
  }

}
