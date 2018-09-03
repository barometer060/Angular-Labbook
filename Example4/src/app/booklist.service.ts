import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './home/IBook';

@Injectable({
  providedIn: 'root'
})
export class BooklistService {

  constructor(private http: HttpClient) { }

  getData(): Observable<IBook[]> {
  	return this.http.get<IBook[]>("/assets/booklist.json");
  }
}
