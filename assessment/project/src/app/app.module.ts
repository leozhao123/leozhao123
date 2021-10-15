import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewroomComponent } from './newroom/newroom.component';
import { EditroomComponent } from './editroom/editroom.component';
import { ImageComponent } from './image/image.component';
import { Form } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdduserComponent,
    ListComponent,
    EditComponent,
    NewroomComponent,
    EditroomComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
