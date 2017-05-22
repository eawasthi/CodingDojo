import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsEditComponent } from './friends/friends-edit/friends-edit.component';
import { FriendsNewComponent } from './friends/friends-new/friends-new.component';
import { FriendsShowComponent } from './friends/friends-show/friends-show.component';
import {FriendsService} from './friends/friends.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendsEditComponent,
    FriendsNewComponent,
    FriendsShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
