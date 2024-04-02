import { Component } from '@angular/core';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { PastPresentFutureComponent } from './past-present-future/past-present-future.component';
import { PrinciplesComponent } from './principles/principles.component';
import { HobbiesComponent } from './hobbies/hobbies.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutBannerComponent, PastPresentFutureComponent, PrinciplesComponent, HobbiesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
