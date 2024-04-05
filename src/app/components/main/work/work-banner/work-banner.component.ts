import { Component } from '@angular/core';

@Component({
  selector: 'app-work-banner',
  standalone: true,
  imports: [],
  templateUrl: './work-banner.component.html',
  styleUrl: './work-banner.component.scss'
})
export class WorkBannerComponent {
  closingTag: string = '</h1>'
  openingTag: string = '<h1>'
}
