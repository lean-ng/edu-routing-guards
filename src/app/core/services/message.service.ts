import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Message, MessageType } from '../models/message';

@Injectable()
export class MessageService {

  private messageSource = new ReplaySubject<Message>(5);
  message$ = this.messageSource.asObservable();

  constructor() { }

  emit(msg: Message) {
    this.messageSource.next(msg);
  }

  success(content: string) {
    this.emit({ type: MessageType.Success, content});
  }

  info(content: string) {
    this.emit({ type: MessageType.Info, content});
  }

  warning(content: string) {
    this.emit({ type: MessageType.Warning, content});
  }

  error(content: string) {
    this.emit({ type: MessageType.Error, content});
  }

}
