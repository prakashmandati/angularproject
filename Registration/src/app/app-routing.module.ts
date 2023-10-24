import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './practice/practice.component';
import { OnewaydatabindingComponent } from './onewaydatabinding/onewaydatabinding.component';
import { WeatherComponent } from './weather/weather.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Home1Component } from './home1/home1.component';
import { StudentComponent } from './student/student.component';
import { MasterComponent } from './master/master.component';
import { SampleComponent } from './sample/sample.component';
import { UserinputComponent } from './userinput/userinput.component';
import { ParentComponent } from './parent/parent.component';
import { FreeapiComponent } from './freeapi/freeapi.component';
import { ImageapiComponent } from './imageapi/imageapi.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { ObservblesComponent } from './observbles/observbles.component';



const routes:Routes=[
 
  {
    path:'',component:HomeComponent

  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'home1',component:Home1Component
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'practice',component:PracticeComponent
  },
  {
    path:'onewaydatabinding',component:OnewaydatabindingComponent
  },
  {
    path:'weather',component:WeatherComponent
  },
  {
    path:'student',component:StudentComponent
  },
  {
    path:'master',component:MasterComponent
  },
  {
    path:'sample',component:SampleComponent
  },
  {
    path:'userinput',component:UserinputComponent
  },
  {
    path:'parent',component:ParentComponent
  },
  {
    path:'freeapi',component:FreeapiComponent
  },
  {
    path:'imageapi',component:ImageapiComponent
  },
  {
    path:'post',component:PostComponent
  },
  {
    path:'get',component:GetComponent
  },
  {
    path:'observbles',component:ObservblesComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
  

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
