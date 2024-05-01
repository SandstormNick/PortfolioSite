import { Component, OnDestroy, OnInit } from '@angular/core';
import { Quote, quoteData } from './models/quote';
import { CommonModule } from '@angular/common';
import { interval, Subject, Subscription, takeUntil  } from 'rxjs';


@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent implements OnInit, OnDestroy {
    quoteSubscription: Subscription;
    private _onDestroy = new Subject<void>();

    public quotes: Quote[];

    quotesLength: number;
    currentQuote: string;
    currentAuthor?: string;
    quoteChanged: boolean;
    intervalDuration = 5000;
    timeoutDuration = this.intervalDuration - 2000;

    ngOnInit(): void {
        this.quotes = quoteData.map(quote => new Quote(quote.id, quote.quote, quote.author));
        this.quotesLength = 0;
        this.currentQuote = this.quotes[0].quote;
        this.currentAuthor = this.quotes[0].author;
        setTimeout(() => {
            this.quoteChanged = true;
        }, this.timeoutDuration);

        this.quoteSubscription = interval(this.intervalDuration).pipe(takeUntil(this._onDestroy)).subscribe((x => {
            this.quotesLength++;
            if (this.quotesLength === this.quotes.length){
                this.quotesLength = 0;
            }
            this.nextQuote();
        }));
    }

    nextQuote() : void {
        setTimeout(() => {
            this.quoteChanged = true;
        }, this.timeoutDuration);

        this.currentQuote = this.quotes[this.quotesLength].quote;
        this.currentAuthor = this.quotes[this.quotesLength].author;

        this.quoteChanged = false;
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

}
