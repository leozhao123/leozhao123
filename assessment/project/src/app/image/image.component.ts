import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  title = 'app';
  selectedfile:any;
  imagepath ="";
  constructor(private image:ImageService) { }
  onFileSelected(event:any){
    this.selectedfile = event.target.files[0]  
      console.log(this.selectedfile)

  }
  onUpload(){
    console.log("??")
    const fd = new FormData()
    fd.append('image',this.selectedfile,this.selectedfile.name)
    this.image.imgupload(fd).subscribe((res)=>{
    this.imagepath = res.data.filename
      console.log(res.data.filename)
    })

  }
  ngOnInit(): void {
  }

}
