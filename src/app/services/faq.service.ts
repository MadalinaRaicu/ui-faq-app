import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FAQ } from '../model/faq';

@Injectable({
  providedIn: 'root',
})
export class FAQService {
  constructor(private http: HttpClient) {}

  getFAQ(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>('../../assets/faq.json');
  }
}
