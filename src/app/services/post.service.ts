import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { DataService } from './data.service';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
