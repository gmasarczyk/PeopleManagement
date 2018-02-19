import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/pagenotfound.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

// import { HomeComponent } from './home.component';
// Uwaga!!! Kolejność ścieżek ma znaczenie, jeśli umieścimy coś po '**' to nigdy tam nie dojdziemy
export const routes: Routes = [
    { path: '', redirectTo: '/persons', pathMatch: 'full' },
    { path: 'persons/create', component: PersonCreateComponent },
    { path: 'persons/edit/:id', component: PersonEditComponent },
    { path: 'persons/:id', component: PersonDetailsComponent },
    { path: 'persons', component: PersonListComponent },
    { path: '**', component: PageNotFoundComponent },
];

export const routing = RouterModule.forRoot(routes);
