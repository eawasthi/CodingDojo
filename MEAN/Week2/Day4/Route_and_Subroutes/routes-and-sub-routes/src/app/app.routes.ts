import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { PersonalComponent } from './notes/personal/personal.component';
import { PublicComponent } from './notes/public/public.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'notes', component: NotesComponent, children: [
    	{path: 'personal', component: PersonalComponent },
    	{path: 'public', component: PublicComponent },
    ]},
];
export const routing = RouterModule.forRoot(APP_ROUTES);