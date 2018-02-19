import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoadingService } from './app-shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public LoadingService: LoadingService
  ) {

  }


}
