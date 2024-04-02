import { Component } from '@angular/core';
import { WorkBannerComponent } from './work-banner/work-banner.component';
import { SkillsSummaryComponent } from './skills-summary/skills-summary.component';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { PersonalProjectsComponent } from './personal-projects/personal-projects.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [WorkBannerComponent, SkillsSummaryComponent, WorkHistoryComponent, PersonalProjectsComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {

}
