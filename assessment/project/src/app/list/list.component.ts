import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AppComponent } from '../app.component';

import { User} from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  user:User[] = [];
  a=''
  
  constructor(private router: Router, private userService: UserService,private app:AppComponent) { 
  }
  
  ngOnInit() {
    this.app.login=true
    this.userService.currentuser().subscribe((data:any) => {
      this.a = data.role
      });    
    this.userService.list().subscribe((data:any) => {
    this.user = data;
    });
  }
  
  delete(user:User){
    let currentURl = this.router.url;
    var r = confirm("Do you want to delete");
    if (r == true) {
      this.userService.delete(user).subscribe((data:any)=>{
        this.ngOnInit()

    })
    }   
 
}
toroom(){
  this.router.navigateByUrl('room')
}
toimage(){
  this.router.navigateByUrl('image')
}
edit(user:User){
  this.userService.newUser = user
  this.router.navigateByUrl('edit')
  console.log(user)
}
add(){
  this.router.navigateByUrl('add');
}
}


