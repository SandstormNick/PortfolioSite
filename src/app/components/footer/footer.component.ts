import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
    faGithub = faSquareGithub;
    faLinkedin = faLinkedin;
    faCopyright = faCopyright;

    githubLink = 'https://github.com/SandstormNick';
    linkedLink = 'https://www.linkedin.com/in/nicholas-gibbens-10b191174/';

}
