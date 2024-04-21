import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/header/nav/nav.component';
import { Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    constructor(private router: Router) { }

    @HostListener('window:keydown', ['$event'])
    handleShortcut(event: KeyboardEvent): void {
        if (event.key === '/' || event.key === '?') {
            this.router.navigate(['/']);
        }
    }

    title = 'SandstormNick.github.io';
}
