import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import * as S from './services/services-index';
import * as P from './pipes/pipes-index';
import { HttpModule } from '@angular/http';
import { Configuration } from './configuration';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FilterService } from './services/filter.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { PersonListComponent } from './person/person-list/person-list.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/pagenotfound.component';
import { routing } from './app.routing';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { PersonEditComponent } from './person/person-edit/person-edit.component';

const SERVICES = [
  S.Resources,
  Configuration,
  S.LoadingService,
  S.PersonService,
  S.FilterService,
  S.ConfigurationService
];

const PIPES = [
  P.PostalCodePipe
]

const COMPONENTS = [
  AppComponent,
  PersonListComponent,
  PageNotFoundComponent,
  PersonDetailsComponent,
  PersonCreateComponent,
  PersonEditComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule,
    routing,
  ],
  providers: [
    ...SERVICES,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
