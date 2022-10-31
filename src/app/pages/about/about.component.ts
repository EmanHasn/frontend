import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persons:any =[
    {
      img:"/img/1.jpg",
      name:"Sara"
    },
    {
      img:"/img/1.jpg",
      name:"Fatma"
    },
    {
      img:"/img/1.jpg",
      name:"Ali"
    },
    {
      img:"/img/1.jpg",
      name:"Ahmed"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
