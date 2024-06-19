import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { NavComponent } from './components/header/nav/nav.component';
import { Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { Title } from '@angular/platform-browser';
import { CanvasComponent } from './components/canvas/canvas.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, NavComponent, FooterComponent, CanvasComponent],
    providers: [Title,],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'SandstormNick.github.io';

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe({
            next: (event) => {
                if (event instanceof NavigationEnd) {
                    setTimeout(() => {
                        const pageTitle = this.getPageTitle(event.url);
                        document.title = `Nick Gibbens • ${pageTitle}`;
                    }, 50);
                }
            },
        });
    }

    @HostListener('window:keydown', ['$event'])
    handleShortcut(event: KeyboardEvent): void {
        if (event.key === '/' || event.key === '?') {
            this.router.navigate(['/']);
        }
    }

    getPageTitle(url: string): string {
        switch(url) {
            case '/about':
                return 'About';
            default:
                return 'Software Developer';
        }
    }
}
