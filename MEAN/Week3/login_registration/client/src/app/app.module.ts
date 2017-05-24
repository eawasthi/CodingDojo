import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersLoginComponent } from './users/users-login/users-login.component';
import { UsersDisplayComponent } from './users/users-display/users-display.component';
import { UsersService } from './users/users.service';
import { UserCrudComponent } from './users/user-crud/user-crud.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersLoginComponent,
    UsersDisplayComponent,
    UserCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
