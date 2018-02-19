import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from '../configuration';
import { PagedPerson, Person } from '../app-shared';

@Injectable()
export class PersonService {
  public headers: Headers;

  constructor(public http: Http,
    public _configuration: Configuration) { }


  public GetWithParam(param?: any): Observable<PagedPerson> {
    this.setHeaders();
    const params = new URLSearchParams();
    if (param) {
      if (param.lastName !== '') {
        params.set('lastName', param.lastName);
      }
      if (param.city !== '') {
        params.set('city', param.city);
      }

    }
    return this.http.get(this._configuration.Person, { search: params, headers: this.headers })
      .map((response: Response) => <PagedPerson>response.json())
      .catch(this.handleError);
  }

  // for paging
  public GetPersons(url?: string): Observable<PagedPerson> {
    this.setHeaders();
    let pageUrl: string = this._configuration.Person;
    if (url) {
      pageUrl = url;
    }
    return this.http.get(url, { headers: this.headers })
      .map((response: Response) => <PagedPerson>response.json())
      .catch(this.handleError);
  }
  ///

  public GetById(id: number): Observable<Person> {
    this.setHeaders();
    let url = `${this._configuration.Person}/${id}`
    return this.http.get(url, { headers: this.headers })
      .map((response: Response) => <Person>response.json())
      .catch(this.handleError);
  }

  public AddPerson(person: Person): Observable<Person> {
    this.setHeaders();
    return this.http.post(this._configuration.Person, JSON.stringify(person), { headers: this.headers })
      .map((response: Response) => <Person>response.json())
      .catch(this.handleError);
  }


  public UpdatePerson(person: Person, id: number): Observable<Person> {
    this.setHeaders();
    let url = `${this._configuration.Person}/${id}`
    return this.http.put(url, JSON.stringify(person), { headers: this.headers })
      .map(res => { return res.json(); })
      .catch(this.handleError);
  }

  public setHeaders(): void {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
  }

  public handleError(error: Response | any): Observable<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      errMsg = body;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

}
