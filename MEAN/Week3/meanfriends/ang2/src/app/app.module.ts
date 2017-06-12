import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsNewComponent } from './friends/friends-new/friends-new.component';
import { FriendsEditComponent } from './friends/friends-edit/friends-edit.component';
import { FriendsShowComponent } from './friends/friends-show/friends-show.component';
import { FriendsService } from "app/friends/friends.service";
import { AllFriendsComponent } from './friends/all-friends/all-friends.component';
import { NameFilterPipe } from './name-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    FriendsNewComponent,
    FriendsEditComponent,
    FriendsShowComponent,
    AllFriendsComponent,
    NameFilterPipe
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
