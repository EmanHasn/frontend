import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _data: GlobalService) { }

  ngOnInit(): void {
  }
  registerUser(RrgisterForm: NgForm){
    this._data.registerUser(RrgisterForm.value).subscribe(
      result=>{
        console.log(this._data)
      },
      (err)=> console.log(err),
      ()=> console.log("done")
    )
  }

}
