import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PostsComponent } from './pages/Blog/posts.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { CardComponent } from './components/card/card.component';
import { UserFormComponent } from './tryingcomponents/user-form/user-form.component';
import { UserListComponent } from './tryingcomponents/user-list/user-list.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PostsComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SinglePostComponent,
    CardComponent,
    UserFormComponent,
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
