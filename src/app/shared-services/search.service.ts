import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  public searchInput : BehaviorSubject<Object> = new BehaviorSubject<Object>({text: ' ',categ: null});

  constructor(private http: HttpClient) {

   }
  
} 
