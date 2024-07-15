import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MessageInterface } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly API = 'http://localhost:3000/messages';
  constructor(private client: HttpClient) {}

  list(page: number, filter: string): Observable<MessageInterface[]> {
    const limit = 5;

    let params = new HttpParams().set('_page', page).set('_limit', limit);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.client.get<MessageInterface[]>(this.API, { params });
  }
  create(message: MessageInterface): Observable<MessageInterface> {
    return this.client.post<MessageInterface>(this.API, message);
  }

  edit(message: MessageInterface): Observable<MessageInterface> {
    const url = `${this.API}/${message.id}`;
    return this.client.put<MessageInterface>(url, message);
  }

  delete(id: number): Observable<MessageInterface> {
    const url = `${this.API}/${id}`;
    return this.client.delete<MessageInterface>(url);
  }

  findById(id: number): Observable<MessageInterface> {
    const url = `${this.API}/${id}`;
    return this.client.get<MessageInterface>(url);
  }
}
