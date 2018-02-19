import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {
  private filtersList: KeyValuePair<string, object>[] = [];
  constructor() { }

  public StoreFilters(key: string, value: object): boolean {
    return this.filtersList.push({ key, value }) >= 0;
  }

  public GetFilters(key): object {
    return this.filtersList.filter(x => x.key === key).length > 0 ? this.filtersList.filter(x => x.key === key)[0].value : null;
  }

}

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
