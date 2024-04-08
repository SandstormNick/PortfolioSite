import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isLightTheme: boolean = true;
  faIcon = faMoon;
  toolTipText = 'Nox!'; //revist this at a later stage
  isScrolled: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isLightTheme.subscribe(isLight => {
      this.isLightTheme = isLight;
      this.updateTheme();
      this.updateIconAndToolTip();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
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
