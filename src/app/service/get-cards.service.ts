import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  fetchPosts(currentPage: number): Observable<any[]> {
    const start = (currentPage - 1) * 5;
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`;
    return this.http.get<any[]>(url);
  }

  fetchTotalPages(): Observable<any[]> {
    const countUrl = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any[]>(countUrl);
  }

  
}
