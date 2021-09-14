import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproject';
  login = this.logincomponet.isLoggedIn;
  constructor(private router:Router, private logincomponet: LoginComponent){}
  ngOnInit(){

  console.log(this.login);
  if(typeof(Storage)!=="undefined"){
  console.log("stoarage is ready 11");
  localStorage.setItem("lee",'superAdmin');
  localStorage.setItem("Liam",'groupAdmin');

}
  }
  itemClicked(username:string){

    this.router.navigateByUrl('/login/'+username);
}
logout(){
  this.login = false;
  console.log(this.login);
  this.router.navigateByUrl('/');

}

}