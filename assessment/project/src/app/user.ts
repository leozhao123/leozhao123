import { NumericType } from "mongodb";

export class User {
    id : number;
    name : string;
    email : string;
    role: string;
    password: string;
    login:boolean;
    room:string;
    image:string
    constructor(id:number, name:string, email: string, role:string,    room:string, image:string,     password: string,login:boolean){
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
      this.password = password;
      this.login = login;
      this.room = room;
      this.image = image
    }
}

export class login {
  name : string;
  password: string;

  constructor(name:string,password: string){
    this.name = name;
    this.password = password;
  }
}