import {
  Component, OnInit, Input, Output, EventEmitter
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from '../models/person';
import {
  PagingMetadata,
  PersonService,
  LoadingService,
  Configuration,
  FilterService,
  ConfigurationService,
  ConfigurationModel
} from '../../app-shared';

@Component({
  selector: 'app-persons-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  public Config: ConfigurationModel;
  public PersonsTab: Person[];
  public params: any;
  public pagingInfo: PagingMetadata;

  constructor(
    public PersonService: PersonService,
    private router: Router,
    private loadingService: LoadingService,
    private configuration: Configuration,
    private filterService: FilterService,
    private configurationService: ConfigurationService
  ) { }

  public ngOnInit(): void {

    this.pagingInfo = new PagingMetadata();
    this.Config = new ConfigurationModel();
    this.OnCleanFilters();
    let filters = this.filterService.GetFilters('personsFilter');
    if (filters != null)
      this.params = filters;
    this.getConfiguration();
    this.OnSubmitSearch();
  }

  public OnSubmitSearch(): void {
    this.loadingService.start();
    this.PersonService.GetWithParam(this.params)
      .subscribe(persons => {

        this.PersonsTab = persons.results;
        this.pagingInfo = persons.metadata;
        console.log(this.PersonsTab)
      },
        error => {
          this.loadingService.stop();
        },
        () => this.loadingService.stop()
      );
  }

  private getConfiguration(): void {
    this.loadingService.start();
    this.configurationService.GetConfiguration()
      .subscribe(result => {
        this.Config = result;
      },
        error => {
          this.loadingService.stop();
        },
        () => this.loadingService.stop()
      );
  }

  public OnCleanFilters(): void {
    if (!this.params) {
      this.params = {
        lastName: '',
        city: ''
      };
    }
    this.params.lastName = '';
    this.params.city = '';
  }

  public OnSelect(m: Person): void {
    this.filterService.StoreFilters('personsFilters', this.params);
    this.router.navigate(['/persons', m.id]);
  }

  public OnNewPerson(): void {
    this.router.navigate(['persons/create']);
  }

  public updateQueryStringParameter(uri: string, key: string, value: number): string {
    const re = new RegExp('([?&])' + key + '=.*?(&|$)', 'i');
    const separator = uri.indexOf('?') !== -1 ? '&' : '?';
    if (uri.match(re)) {
      return uri.replace(re, '$1' + key + '=' + value + '$2');
    } else {
      return uri + separator + key + '=' + value;
    }
  }

  public pageSizeChanged(ev: any): void {
    if (!this.pagingInfo.nextPageLink) {
      this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
    } else {
      this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageSize', this.pagingInfo.pageSize);
    }

    // Po zmianie strony przejdz do pierwszej
    this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', 1);
    this.loadingService.start();
    this.PersonService.GetPersons(this.pagingInfo.nextPageLink)
      .subscribe(persons => {
        this.PersonsTab = persons.results;
        this.pagingInfo = persons.metadata;
      },
        error => {
          this.loadingService.stop();
        },
        () => this.loadingService.stop()
      );
  }

  public pageChanged(ev: any): void {
    this.loadingService.start();
    if (ev > this.pagingInfo.currentPage) {
      if (!this.pagingInfo.nextPageLink) {
        this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
        this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', ev);
      }
      if (ev > (this.pagingInfo.currentPage + 1)) {
        // kliknięto link do konkretnej strony -> zatem trzeba poskładać linka ręcznie
        this.pagingInfo.nextPageLink = this.updateQueryStringParameter(this.pagingInfo.nextPageLink, 'pageNumber', ev);
      }
      this.PersonService.GetPersons(this.pagingInfo.nextPageLink)
        .subscribe(persons => {
          this.PersonsTab = persons.results;
          this.pagingInfo = persons.metadata;
        },
          error => {
            this.loadingService.stop();
          },
          () => this.loadingService.stop()
        );
    } else if (ev < this.pagingInfo.currentPage) {
      if (this.pagingInfo.previousPageLink) {
        this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.basePageLink, 'pageSize', this.pagingInfo.pageSize);
        this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.previousPageLink, 'pageNumber', ev);
      }
      if (ev < (this.pagingInfo.currentPage - 1)) {
        // kliknięto link do konkretnej strony -> zatem trzeba poskładać linka ręcznie
        this.pagingInfo.previousPageLink = this.updateQueryStringParameter(this.pagingInfo.previousPageLink, 'pageNumber', ev);
      }
      this.PersonService.GetPersons(this.pagingInfo.previousPageLink)
        .subscribe(persons => {
          this.PersonsTab = persons.results;
          this.pagingInfo = persons.metadata;
        },
          error => {
            this.loadingService.stop();
          },
          () => this.loadingService.stop()
        );
    }
  }
}

