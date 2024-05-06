import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Photo, photoData } from './models/photo';
import { QuoteLooperComponent } from './components/quote-looper/quote-looper.component';


@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [ CommonModule, QuoteLooperComponent ],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent implements OnInit {

    public photos: Photo[];
    public photoPortrait: Photo;
    public photoLandscape: Photo;

    ngOnInit(): void {
        this.photos = photoData.map(photo => new Photo(photo.id, photo.src, photo.about, photo.isLandscape));
        this.setPhotos();
    }

    setPhotos(): void {
        // Filter photos based on landscape/portrait
        const portraitPhotos = this.photos.filter(photo => !photo.isLandscape);
        const landscapePhotos = this.photos.filter(photo => photo.isLandscape);

        // Select random photo from each category
        this.photoPortrait = this.getRandomItem(portraitPhotos);
        this.photoLandscape = this.getRandomItem(landscapePhotos);
    }

    private getRandomItem<T>(array: T[]): T {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
      }

}
