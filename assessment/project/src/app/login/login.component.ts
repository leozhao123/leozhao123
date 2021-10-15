import { Component, OnInit } from '@angular/core';
import { login } from '../user';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userinput : login={
    name:'',
    password:''
  }
  constructor(private user:UserService,private router: Router, private http: HttpClient) {}
  a = false;

  ngOnInit(): void {
    
    
  }
  
  login(){
    this.a =true
    this.user.login(this.userinput).subscribe((data:any)=>{
      this.router.navigateByUrl('list')
      
    });
  }

}
