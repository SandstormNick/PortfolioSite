import { Component } from '@angular/core';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { PastPresentFutureComponent } from './past-present-future/past-present-future.component';
import { PrinciplesComponent } from './principles/principles.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { PictureComponent } from './picture/picture.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutBannerComponent, PictureComponent, PastPresentFutureComponent, PrinciplesComponent, HobbiesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
