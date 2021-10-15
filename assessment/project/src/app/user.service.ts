import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, User } from './user';
import { Chart,channelname } from './chart';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
  newlogin: login ={
    name:'',
    password:''
  }
  newchart: Chart= {
    id :0,
    roomname: "",
    channelname:"",
   
}
newchannel: channelname={
  id :0,
  channelname :'',
  username :'',
  roomid:0,
}
  constructor(private http: HttpClient) { }
  addUser(user:User){
    return this.http.post('http://localhost:3000/add',user)
  }
  logout(user:User){
    return this.http.post('http://localhost:3000/logout',user)
  }
  list(){
    return this.http.get('http://localhost:3000/list');
  }
  currentuser(){
    return this.http.get('http://localhost:3000/currentuser');
  }
  showchan(newchart:Chart){
    return this.http.post('http://localhost:3000/showchan',newchart);
  }
  listrooms(){
    return this.http.get('http://localhost:3000/listrooms');
  }
  delete(user: User){
    return this.http.post('http://localhost:3000/delete',user);
  }
  edit(user: User){
    return this.http.post( 'http://localhost:3000/edit',user);
  }
  login(newlogin: login){
    return this.http.post('http://localhost:3000/login',newlogin);
  }
  newroom(chart:Chart){
    return this.http.post('http://localhost:3000/newroom',chart);
  }
  editroom(chart:Chart){
    return this.http.post('http://localhost:3000/editroom',chart);
  }
  deleteroom(chart:Chart){
    return this.http.post('http://localhost:3000/deleteroom',chart);
  }
  addchannel(channel:channelname){
    return this.http.post('http://localhost:3000/addchannel',channel);
  }
  putuser(user: User){
    return this.http.post('http://localhost:3000/putuser',user);
  }
  showuser(user: Chart){
    console.log("asdS")
    return this.http.post('http://localhost:3000/showuser',user);
  }
  
}

