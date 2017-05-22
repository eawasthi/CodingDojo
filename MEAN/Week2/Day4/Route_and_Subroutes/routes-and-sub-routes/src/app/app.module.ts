import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { PublicComponent } from './notes/public/public.component';
import { PersonalComponent } from './notes/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    PublicComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
