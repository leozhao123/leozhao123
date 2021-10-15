import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editUser = this.userService.newUser

  constructor(private userService:UserService, private route:Router){}

  ngOnInit(): void {
  }
  edit(){
    this.userService.edit(this.editUser).subscribe((data:any)=>{
      console.log(data)
      this.route.navigateByUrl('list');
    })
    
  }
}
