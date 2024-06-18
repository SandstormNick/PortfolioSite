import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements AfterViewInit {
    @ViewChild('canvasHero', {static: false}) canvas: ElementRef<HTMLCanvasElement>;

    private ctx: CanvasRenderingContext2D;

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
        const gradient = this.ctx.createLinearGradient(0, 0, 0, height);

        // Define gradient colors
        gradient.addColorStop(0, 'darkgreen');
        gradient.addColorStop(0.15, 'green');
        gradient.addColorStop(0.3, 'greenyellow');
        gradient.addColorStop(0.45, 'lightgreen');
        gradient.addColorStop(0.7, 'palegreen');
        gradient.addColorStop(1, 'hsla(36, 31%, 90%, 1)'); // Add the site background color

        // Apply the gradient as fill style
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, width, height);
    }

}
