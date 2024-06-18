import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit, AfterViewInit {
    isLightTheme = true;

    @ViewChild('canvasHero', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;

    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {
        this.themeService.isLightTheme.subscribe(isLight => {
            this.isLightTheme = isLight;
            this.drawGradient();
          });
    }

    ngAfterViewInit(): void {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d')!;
        this.drawGradient();
    }

    drawGradient(): void {
        if (!this.ctx) return;

        // Get the canvas dimensions
        const width = this.canvas.nativeElement.width;
        const height = this.canvas.nativeElement.height;

        // Create a linear gradient
        let gradient = this.ctx.createLinearGradient(0, 0, 0, height);

        // Define gradient colors
        if (this.isLightTheme) {
            gradient = this.setLightThemeColors(gradient);
        } else {
            gradient = this.setDarkThemeColors(gradient);
        }

        // Apply the gradient as fill style
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, width, height);
    }

    private setLightThemeColors(gradient: CanvasGradient): CanvasGradient {
        gradient.addColorStop(0, 'darkgreen');
        gradient.addColorStop(0.15, 'green');
        gradient.addColorStop(0.3, 'greenyellow');
        gradient.addColorStop(0.45, 'lightgreen');
        gradient.addColorStop(0.7, 'palegreen');
        gradient.addColorStop(1, 'hsla(36, 31%, 90%, 1)'); // Add the site background color

        return gradient;
    }

    private setDarkThemeColors(gradient: CanvasGradient): CanvasGradient {
        gradient.addColorStop(0, 'darkolivegreen');
        gradient.addColorStop(0.15, 'olivedrab');
        gradient.addColorStop(0.3, 'yellowgreen');
        gradient.addColorStop(0.45, 'mediumseagreen');
        gradient.addColorStop(0.7, 'seagreen');
        gradient.addColorStop(1, 'hsla(158, 23%, 18%, 1)'); // Site background color for dark theme

        return gradient;
    }

}
