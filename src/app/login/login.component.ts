import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators }from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  testForms: FormGroup;
  submitted = false;
  notvalidpassword = false;
  notvalidusername = false;
  constructor(private router: Router) { }

  ngOnInit() {
    this.testForms= new FormGroup({
      UserName:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required])
      });
  }
  get f() {
    return this.testForms.controls;
  }

  onSubmit(){
    this.submitted = true;
    // if(this.f.UserName.value == '')
    // {
    //   this.notvalidusername = true;
    //   return;
    // }
    // if(this.f.Password.value != 'Admin' && this.f.UserName.value != 'Admin')
    // {
    //   this.notvalidusername = true;
    // }

    // if(this.testForms.invalid ){
    //   return;
    // }
    
    // else if (!this.notvalidpassword && !this.notvalidusername)
    // {
      this.router.navigate(['/home']);
    // }
    // let val = this.testForms.value;
    // console.log(val.UserName);
  }

}
