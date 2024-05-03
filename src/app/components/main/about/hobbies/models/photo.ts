export class Photo {
    id: number;
    src: string;
    about: string;
    isLandscape: boolean;

    constructor(id: number, src: string, about: string, isLandscape: boolean) {
        this.id = id;
        this.src = src;
        this.about = about;
        this.isLandscape = isLandscape;
    }
}

const pathToPhotos = '../../../../../assets/images/photos/';

export const photoData = [
    {id: 1, src: `${pathToPhotos}Battersea.JPG`, about: `Battersea, London`, isLandscape: false},
    {id: 2, src: `${pathToPhotos}canary_wharf.JPG`, about: `Canary Wharf, London`, isLandscape: false},
    {id: 3, src: `${pathToPhotos}houses_parliament.JPG`, about: `Westminster, London`, isLandscape: true},
    {id: 4, src: `${pathToPhotos}lions_head.jpg`, about: `Lion's Head, Cape Town`, isLandscape: false},
    {id: 5, src: `${pathToPhotos}newlands.jpg`, about: `Newlands, Cape Town`, isLandscape: true},
    {id: 6, src: `${pathToPhotos}seapoint.jpg`, about: `Sea Point, Cape Town`, isLandscape: false},
    {id: 7, src: `${pathToPhotos}simons_town.jpg`, about: `Simon's Town, Cape Town`, isLandscape: true},
    {id: 8, src: `${pathToPhotos}table_mountain.jpg`, about: `Table Mountain, Cape Town`, isLandscape: true}
]