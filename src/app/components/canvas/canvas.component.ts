import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
    isLightTheme = true;

    @ViewChild('canvasHero', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;
    private gradientShift: number = 0; // Animation state
    private animationFrameId: number;

    constructor(private themeService: ThemeService) {}

    ngOnInit(): void {
        this.themeService.isLightTheme.subscribe(isLight => {
            this.isLightTheme = isLight;
          });
    }

    ngAfterViewInit(): void {
        const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
        this.ctx = canvasEl.getContext('2d')!;
        this.startAnimation();
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationFrameId);
    }

    startAnimation(): void {
        const animate = () => {
          this.drawGradient();
          this.gradientShift += 0.01; // Adjust the speed of the animation
          this.animationFrameId = requestAnimationFrame(animate);
        };
        this.animationFrameId = requestAnimationFrame(animate);
      }

    drawGradient(): void {
        if (!this.ctx) return;

        // Get the canvas dimensions
        const width = this.canvas.nativeElement.width;
        const height = this.canvas.nativeElement.height;

        // Create a linear gradient
        let gradient = this.ctx.createLinearGradient(0, 0, 0, height);

        const shift = Math.sin(this.gradientShift) * 0.5 + 0.5; // Calculate shift value for animation

        // Define gradient colors
        if (this.isLightTheme) {
            gradient = this.setLightThemeColors(gradient, shift);
        } else {
            gradient = this.setDarkThemeColors(gradient, shift);
        }

        // Clear the canvas before drawing
        this.ctx.clearRect(0, 0, width, height);

        // Apply the gradient as fill style
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, width, height);
    }

    private setLightThemeColors(gradient: CanvasGradient, shift: number): CanvasGradient {
        gradient.addColorStop(0, `rgba(0, 100, 0, ${shift})`); // darkgreen
        gradient.addColorStop(0.15, `rgba(0, 128, 0, ${shift})`); // green
        gradient.addColorStop(0.3, `rgba(173, 255, 47, ${shift})`); // greenyellow
        gradient.addColorStop(0.45, `rgba(144, 238, 144, ${shift})`); // lightgreen
        gradient.addColorStop(0.7, `rgba(152, 251, 152, ${shift})`); // palegreen
        gradient.addColorStop(1, 'hsla(36, 31%, 90%, 1)'); // Site background color

        return gradient;
    }

    private setDarkThemeColors(gradient: CanvasGradient, shift: number): CanvasGradient {
        gradient.addColorStop(0, `rgba(85, 107, 47, ${shift})`); // darkolivegreen
        gradient.addColorStop(0.15, `rgba(107, 142, 35, ${shift})`); // olivedrab
        gradient.addColorStop(0.3, `rgba(154, 205, 50, ${shift})`); // yellowgreen
        gradient.addColorStop(0.45, `rgba(60, 179, 113, ${shift})`); // mediumseagreen
        gradient.addColorStop(0.7, `rgba(46, 139, 87, ${shift})`); // seagreen
        gradient.addColorStop(1, 'hsla(158, 23%, 18%, 1)'); // Site background color for dark theme

        return gradient;
    }
}
