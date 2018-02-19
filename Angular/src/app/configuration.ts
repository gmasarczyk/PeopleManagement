import { Injectable } from '@angular/core';
@Injectable()
export class Configuration {

  public ApiUri: string = document.baseURI + '/api/';
  public Person: string = `${this.ApiUri}data`;
  public Configuration: string = `${this.ApiUri}data/configuration`;
  constructor() {
    if (document.baseURI === 'http://localhost:4200/') {
      this.ApiUri = 'http://localhost:50193/api/';
    }
    this.Person = `${this.ApiUri}data`;
    this.Configuration = `${this.ApiUri}data/configuration`;
  }











}
