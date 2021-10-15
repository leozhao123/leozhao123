import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {
  room = this.userService.newchart

  constructor(private userService:UserService, private route:Router){}

  ngOnInit(): void {
  }
  editrooms(){
    this.userService.editroom(this.room).subscribe((data:any)=>{
      console.log(data)
      this.route.navigateByUrl('room');
    })
    
  }
}
