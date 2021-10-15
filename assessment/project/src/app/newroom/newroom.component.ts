import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { channelname, Chart } from '../chart';
import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

import { User } from '../user';

@Component({
  selector: 'app-newroom',
  templateUrl: './newroom.component.html',
  styleUrls: ['./newroom.component.css']
})
export class NewroomComponent implements OnInit  {
  chart :Chart[] =[]
  channel : channelname[]=[]
  users :User[]=[]
  a=''
  channe:Chart[]=[]
  newchart: Chart= {
    id :0,
    roomname: "",
    channelname:"",
   
}
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
newchannel: channelname={
    id :0,
    channelname :'',
    username :'',
    roomid:0
}
editUser = this.userservice.newUser


  constructor(private router: Router, private userservice: UserService,private app:AppComponent) { }

  ngOnInit(): void {
    this.app.login=true
    this.userservice.currentuser().subscribe((data:any) => {
      this.a = data.role
      }); 
    this.userservice.listrooms().subscribe((data:any) => {
      this.chart = data;
    });
    
  }
  addroom(){
    this.userservice.newroom(this.newchart).subscribe((data:any)=>{
      this.ngOnInit()
  });

}
addchannel(){
  this.userservice.addchannel(this.newchannel).subscribe((data:any)=>{
    this.router.navigateByUrl('room')
  })
}
check(){
  if (this.a == 'suerpadimin'){
    return true
  }else if(this.a == 'groupadmin'){
  return true}
  else{return false}
}
edit(chart:Chart){
  this.userservice.newchart = chart
  this.router.navigateByUrl('editroom')
  console.log(chart)
}
delete(chart:Chart){
  let currentURl = this.router.url;
  var r = confirm("Do you want to delete");
  if (r == true) {
    this.userservice.deleteroom(chart).subscribe((data:any)=>{
      this.ngOnInit()

  })
  }  
   

}
putuser(room:string){
  this.editUser.room = room
  console.log(this.editUser)
  this.userservice.putuser(this.editUser).subscribe((data:any)=>{
    this.router.navigateByUrl('room');
  })
}
showchan(char:Chart){
    this.userservice.showchan(char).subscribe((data:any)=>{
        this.channel = data;
    });
}
showuser(user:Chart){
  console.log("??")
  this.userservice.showuser(user).subscribe((data:any)=>{
      this.users = data;
  });
}

}
