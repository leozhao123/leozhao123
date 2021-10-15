export class Chart {
    id:number;
    roomname: string;
    channelname:string;
    constructor(id:number,roomname:string,channelname:string){
        this.id = id
        this.roomname = roomname
        this.channelname = channelname

    }
}
export class channelname{
    id:number;
    channelname:string;
    username:string;
    roomid:number;
    constructor(id:number,channelname:string,   username:string,    roomid:number
        ){
        this.id = id
        this.channelname = channelname
        this.username = username
        this.roomid=roomid
}
}
export class Username{
    id:number;
    username:string;
    constructor(id:number,  username:string){
        this.id = id
        this.username = username
    }

}
