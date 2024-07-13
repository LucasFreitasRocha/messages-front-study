import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageInterface } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private readonly API = 'http://localhost:3000/messages';
  constructor(private client: HttpClient) {}

  list(): Observable<MessageInterface[]> {
    return this.client.get<MessageInterface[]>(this.API);
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
