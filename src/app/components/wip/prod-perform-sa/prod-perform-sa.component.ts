import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-prod-perform-sa',
  templateUrl: './prod-perform-sa.component.html',
//   styleUrls: ['./prod-perform-sa.component.scss']
})
export class ProdPerformSaComponent implements OnInit, OnDestroy {
    currentDate$: Observable<Date>;
    private subscription: Subscription;

    ngOnInit() {
      // Create an observable that emits the current date every second
      this.currentDate$ = interval(1000).pipe(
        // Use the map operator to transform the emitted value to the current date
        map(() => new Date())
      );

      // Subscribe to the observable and update the current date property
      this.subscription = this.currentDate$.subscribe(date => {
        this.currentDate = date;
      });
    }

    ngOnDestroy() {
      // Unsubscribe from the observable to avoid memory leaks
      this.subscription.unsubscribe();
    }

    // Declare the currentDate property to hold the current date
    currentDate: Date;
  }
