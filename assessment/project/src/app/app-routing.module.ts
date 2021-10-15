import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewroomComponent } from './newroom/newroom.component';
import { EditroomComponent } from './editroom/editroom.component';
import { ImageComponent } from './image/image.component';
const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'', component:LoginComponent},
    {path:'list', component:ListComponent},
    {path:'add', component:AdduserComponent},
    {path:'edit', component:EditComponent},
    {path:'room', component:NewroomComponent},
    {path:'editroom', component:EditroomComponent},
    {path:"image", component:ImageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
