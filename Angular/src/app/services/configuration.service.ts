import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from '../configuration';
import { ConfigurationModel } from '../app-shared';

@Injectable()
export class ConfigurationService {

  public headers: Headers;
  // public currentMerchant: Merchant;

  constructor(public http: Http,
    // public securityService: OidcSecurityService,
    public _configuration: Configuration) { }


  public GetConfiguration(): Observable<ConfigurationModel> {
    this.setHeaders();

    return this.http.get(this._configuration.Configuration, { headers: this.headers })
      .map((response: Response) => <ConfigurationModel>response.json())
      .catch(this.handleError);
  }
  

  public setHeaders(): void {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');

    // const token = this.securityService.GetToken();
    // if (token !== '' && token !== undefined) {
    //   const tokenValue = 'Bearer ' + token;
    //   this.headers.append('Authorization', tokenValue);
    // }
  }

  public handleError(error: Response | any): Observable<any> {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      // const err = body.error || JSON.stringify(body);
      // const err = JSON.stringify(body);
      // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      errMsg = body;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

}
