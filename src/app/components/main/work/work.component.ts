import { Component } from '@angular/core';
import { WorkBannerComponent } from './work-banner/work-banner.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkBannerComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
