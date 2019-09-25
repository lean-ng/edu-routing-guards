import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './core/services/message.service';
import { Subscription, BehaviorSubject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { Message } from './core/models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private msgSubscription: Subscription;
  messages$ = new BehaviorSubject<Message[]>([]);

  constructor(private msgSvc: MessageService) {}

  ngOnInit() {
    this.msgSubscription = this.msgSvc.message$
      .pipe(
        debounceTime(300)
      )
      .subscribe(
        (msg) => {
          const currentMessages = this.messages$.value;
          this.messages$.next([...currentMessages, msg]);
        }
      );

    this.messages$.pipe(debounceTime(2000))
        .subscribe(messages => {
          this.messages$.next( this.messages$.value.slice(1));
        });
  }

  ngOnDestroy() {}
}
