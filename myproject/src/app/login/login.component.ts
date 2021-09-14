import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CounterService} from '../counter.sercive';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userid="";
  usernumber:number=0;
  cnt:number=0;
  paramsub:any=[];
  isLoggedIn=true;
  username= "";
  superadmin:any;
  groupadmin:any;
  groupassis:any;
  users:any;
  imageheigh:number = 50;
  user:any=[];
  lists = [{'name':'leo','city':'brishbane','url':'wqe'}];
  allusers = Object.entries(localStorage);
  groups:any=[];
  currentUser:any={};
  groupbyname=Object.entries(sessionStorage);

constructor(private route:ActivatedRoute, private counter:CounterService) {}

  ngOnInit() {
    this.groups = this.makegroups(this.allusers);
    this.cnt = this.counter.incrementcounter();
    this.paramsub = this.route.paramMap.subscribe(params => {
      this.userid = params.get('id')!;
      this.user = (localStorage.getItem(params.get('id')||'{}'))
      this.usernumber = this.counter.incrementUsercounter();
      this.currentUser=this.findkey(this.groups,this.userid)
      this.isLoggedIn=true;
      let data = sessionStorage;
      console.log(this.superadmin,this.groupadmin,this.groupassis);
      console.log(this.currentUser)
      if (this.currentUser.role=="superAdmin") {
        this.superadmin=true; 
        this.groupadmin=false; 
        this.groupassis=false; 
        this.users=false
      }else  if (this.currentUser.role=="groupAdmin") {
        this.superadmin=false; 
        this.groupadmin=true; 
        this.groupassis=false; 
        this.users=false
      }else if (this.currentUser.role=="groupAssis") {
        this.superadmin=false; 
        this.groupadmin=false; 
        this.groupassis=true; 
        this.users=false
      }else if (this.currentUser.role=="user") {
        this.superadmin=false; 
        this.groupadmin=false; 
        this.groupassis=false; 
        this.users=true
      }else  {
        this.superadmin=true; 
        this.groupadmin=false; 
        this.groupassis=false; 
        this.users=false;
        this.groups[this.currentUser.ID].role="superAdmin";

      }
    });
    
  }

adduser(newuser:string){
    localStorage.setItem(newuser,'user');


  }
unsub(){
  this.paramsub.unsubscribe();
}
ngOnDestory(){
  if(this.paramsub){
    this.paramsub.unsubscribe();

  }
}
removeuser(user:any){
  var key = user;
  localStorage.removeItem(key);    
  location.reload();
}
setasUser(user:any){
  if (user[1]=="user") {
    alert("this is user already!");
  }else{
    localStorage.setItem(user[0],"user");
    this.currentUser.role="user";

    for(const a in this.groups){
      if(this.groups[a].name == user[0]){
        this.groups[a].role="user";
      }


    }
    location.reload();

  }

}

setasgroupsAssis(user:any){
  if (user[1]=="groupAssis") {
    alert("this is user Group assistance already!");
  }else{
    localStorage.setItem(user[0],"groupAssis");
    this.currentUser.role="groupAssis";

    location.reload();

  }
}
setasGroupAdmin(user:any){
  if (user[1]=="groupAdmin") {
    alert("this is user Group  group administrator!");
  }else{
    localStorage.setItem(user[0],"groupAdmin");
    this.currentUser.role="groupAdmin";

    location.reload();

  }
}
setasSuperAdmin(user:any){
  if (user[1]=="superAdmin") {
    alert("this is user Group  super administrator!");
  }else{
    localStorage.setItem(user[0],"superAdmin");
    this.currentUser.role="superAdmin";
    location.reload();

  }
}

makegroups(user:any){
  let values=[];
  let obj={
    name:"",
    password:"",
    group:"",
    ID:"",
    email:"",
    channel:"",
    role:"",
  }
  for(var i=0;i<user.length;i++){
    let stort={}
      obj.name=user[i][0];
      obj.role=user[i][1];
      obj.group='0';
      obj.ID=i.toString();
      obj.email=user[i][0] + "@gmail.com";
      obj.channel="0";
      const tempMyObj = Object.assign({}, obj);
      values.push(tempMyObj);
    }
    
  return values;
}
findkey(obj:any,key:any){
  let object = obj.find((o: { name: any; }) => o.name === key);
  
  return object;
}
newgroup(){
  let data = sessionStorage;
  
  sessionStorage.setItem("group"+data.length,'')
  location.reload();
}
removegroup(groupnumber:any){
  if (sessionStorage.length>1){
  sessionStorage.removeItem("group"+groupnumber)
  location.reload();
  
  }else{
    sessionStorage.clear();
    location.reload();

  }

}
usertogroup(user:any,key:any){
  let count =0;
  let addedUser = sessionStorage.getItem("group"+key);
  let adduser2:any;
  if(addedUser!=''){
    adduser2 = addedUser +','+user
  }else{adduser2=user}
  for(var i=0;i<this.allusers.length;i++){
    
    if(this.allusers[i].includes(user)){
      sessionStorage.setItem("group"+key,adduser2)
    }else{count ++;}
  }
  if(count == this.allusers.length){
    alert("user does not exist");
  }
  location.reload();

}
removeFromGroup(user:any,key:any){
  let listOfName = sessionStorage.getItem("group"+key);
  
  if(listOfName!=null){
    if (listOfName.includes(','+user)) {
      let newlist = listOfName.replace(","+user,"")
      sessionStorage.setItem("group"+key,newlist)

    }else if(listOfName.includes(user)){
      listOfName.replace(user+",","")
      let newlist = listOfName.replace(user+",","")

      sessionStorage.setItem("group"+key,newlist)

    }else{
      alert("Ueser does not exist")
    }
    }
    location.reload();

}    


}
