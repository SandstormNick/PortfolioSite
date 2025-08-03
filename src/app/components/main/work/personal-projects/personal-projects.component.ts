import { Component, OnInit } from '@angular/core';
import { NgxQuoteLooperComponent } from 'ngx-quote-looper';
import { quoteData } from './models/quote';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [ NgxQuoteLooperComponent ],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.scss'
})
export class PersonalProjectsComponent implements OnInit {
  baseImageUrl = environment.imageBaseUrl;
  public quoteData: any[];

  ngOnInit(): void {
    this.quoteData = quoteData;
  }

}
