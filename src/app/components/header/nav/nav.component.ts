import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isLightTheme: boolean = true;
  faIcon = faMoon;
  toolTipText = 'Nox!';

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isLightTheme.subscribe(isLight => {
      this.isLightTheme = isLight;
      this.updateTheme();
      this.updateIconAndToolTip();
    });
  }

  onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  private updateTheme() {
    const themeAttribute = this.isLightTheme ? 'light' : 'dark';
    document.body.setAttribute('data-theme', themeAttribute);
  }

  private updateIconAndToolTip() {
    if (this.isLightTheme) {
      this.faIcon = faMoon;
      this.toolTipText = 'Nox!';
    } else {
      this.faIcon = faSun;
      this.toolTipText = 'Lumos!';
    }
  }


}
