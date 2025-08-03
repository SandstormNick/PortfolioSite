import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-skills-summary',
  standalone: true,
  imports: [],
  templateUrl: './skills-summary.component.html',
  styleUrl: './skills-summary.component.scss'
})
export class SkillsSummaryComponent {
  baseImageUrl = environment.imageBaseUrl;
}
