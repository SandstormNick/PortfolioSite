import { Component, OnInit } from '@angular/core';
import { Quote, quoteData } from './models/quote';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent implements OnInit {
    public quotes: Quote[];
    

    ngOnInit(): void {
        this.quotes = quoteData.map(quote => new Quote(quote.id, quote.quote, quote.author));

        console.log(this.quotes);
    }

}
