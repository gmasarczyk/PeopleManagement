import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {
  public loading = false;
  private counter: number = 0;

  public start(): void {
    this.loading = true;
    this.counter++;
  }

  public stop(): void {

    this.counter--;
    if (this.counter <= 0) {
      this.loading = false;
    }
  }
}
