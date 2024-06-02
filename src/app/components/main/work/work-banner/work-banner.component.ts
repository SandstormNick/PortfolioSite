import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-work-banner',
  standalone: true,
  imports: [ LucideAngularModule ],
  templateUrl: './work-banner.component.html',
  styleUrl: './work-banner.component.scss',
})
export class WorkBannerComponent implements AfterViewInit {
  closingTag: string = '</h1>'
  openingTag: string = '<h1>'
  iconName = "sparkles";
  @ViewChild('LeftIconId') leftIconContainer: ElementRef;
  @ViewChild('RightIconId') rightIconContainer: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.fadeInAnimation();
}

    fadeInAnimation(): void {
        if (this.leftIconContainer && this.leftIconContainer.nativeElement) {
            this.renderer.setStyle(this.leftIconContainer.nativeElement, 'opacity', '0');
            setTimeout(() => {
                this.renderer.setStyle(this.leftIconContainer.nativeElement, 'opacity', '1');
            }, 1000); // Delay to ensure the animation starts after a short delay
        }

        if (this.rightIconContainer && this.rightIconContainer.nativeElement) {
            this.renderer.setStyle(this.rightIconContainer.nativeElement, 'opacity', '0');
            setTimeout(() => {
                this.renderer.setStyle(this.rightIconContainer.nativeElement, 'opacity', '1');
            }, 1000); // Delay to ensure the animation starts after a short delay
        }
    }
}
