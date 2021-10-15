import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User} from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  newUser : User={ 
    id : 0,
    name : "",
    email : "",
    role: "",
    password: "",
    login:false,
    room:"",
    image:''
}
    constructor(private router: Router, private userservice: UserService) { }

  ngOnInit(): void {
  }
  adduser(){
    this.userservice.addUser(this.newUser).subscribe((data:any)=>{
    this.router.navigateByUrl('list')
  });
}
}
