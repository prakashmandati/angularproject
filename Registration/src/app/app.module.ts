import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { PracticeComponent } from './practice/practice.component';
import { OnewaydatabindingComponent } from './onewaydatabinding/onewaydatabinding.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { Home1Component } from './home1/home1.component';
import { StudentComponent } from './student/student.component';
import { MasterComponent } from './master/master.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { SampleComponent } from './sample/sample.component';
import { SamplelistcountComponent } from './samplelistcount/samplelistcount.component';
import { UserinputComponent } from './userinput/userinput.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FreeapiComponent } from './freeapi/freeapi.component';
import { ImageapiComponent } from './imageapi/imageapi.component';
import { PutapiComponent } from './putapi/putapi.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { ObservblesComponent } from './observbles/observbles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    PracticeComponent,
    OnewaydatabindingComponent,
    WeatherComponent,
    Home1Component,
    StudentComponent,
    MasterComponent,
    PopupComponent,
    SampleComponent,
    SamplelistcountComponent,
    UserinputComponent,
    UserdisplayComponent,
    ParentComponent,
    ChildComponent,
    FreeapiComponent,
    ImageapiComponent,
    PutapiComponent,
    PostComponent,
    GetComponent,
    ObservblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [TestService,WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export interface User {
    name: string;
    lastname: string;
    dateOfBirth: string;
    city: string;
    state: string;
  }
