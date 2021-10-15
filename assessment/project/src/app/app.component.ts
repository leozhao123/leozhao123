import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  thisuer = this.userService.newUser
  login = false
  constructor(private userService:UserService, private route:Router){}
  ngOnInit(): void {
  }
logout(){
  this.userService.logout(this.thisuer).subscribe((data:any)=>{
    this.route.navigateByUrl('');
    this.login=false
})
}
}
