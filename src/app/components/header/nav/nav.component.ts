import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  isLightTheme: boolean = true;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isLightTheme.subscribe(isLight => {
      this.isLightTheme = isLight;
      this.updateTheme();
    });
  }

  onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  private updateTheme() {
    const themeAttribute = this.isLightTheme ? 'light' : 'dark';
    document.body.setAttribute('data-theme', themeAttribute);
  }

}
