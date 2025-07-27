export class Photo {
    id: number;
    src: string;
    srcAvif: string;
    srcWebp: string;
    about: string;
    isLandscape: boolean;

    constructor(id: number, src: string, srcAvif: string, srcWebp: string, about: string, isLandscape: boolean) {
        this.id = id;
        this.src = src;
        this.srcAvif = srcAvif;
        this.srcWebp = srcWebp;
        this.about = about;
        this.isLandscape = isLandscape;
    }
}

const pathToPhotos = '../../../../../assets/images/photos/';


export const photoData = [
    {id: 1, src: `${pathToPhotos}Battersea.JPG`, srcAvif: `${pathToPhotos}Battersea.avif`, srcWebp: `${pathToPhotos}Battersea.webp`, about: `Battersea, London`, isLandscape: false},
    {id: 2, src: `${pathToPhotos}canary_wharf.JPG`, srcAvif: `${pathToPhotos}canary_wharf.avif`, srcWebp: `${pathToPhotos}canary_wharf.webp`, about: `Canary Wharf, London`, isLandscape: false},
    {id: 3, src: `${pathToPhotos}houses_parliament.JPG`, srcAvif: `${pathToPhotos}houses_parliament.avif`, srcWebp: `${pathToPhotos}houses_parliament.webp`, about: `Westminster, London`, isLandscape: true},
    {id: 4, src: `${pathToPhotos}lions_head.jpg`, srcAvif: `${pathToPhotos}lions_head.avif`, srcWebp: `${pathToPhotos}lions_head.webp`, about: `Lion's Head, Cape Town`, isLandscape: false},
    {id: 5, src: `${pathToPhotos}newlands.jpg`, srcAvif: `${pathToPhotos}newlands.avif`, srcWebp: `${pathToPhotos}newlands.webp`, about: `Newlands, Cape Town`, isLandscape: true},
    {id: 6, src: `${pathToPhotos}seapoint.jpg`, srcAvif: `${pathToPhotos}seapoint.avif`, srcWebp: `${pathToPhotos}seapoint.webp`, about: `Sea Point, Cape Town`, isLandscape: false},
    {id: 7, src: `${pathToPhotos}simons_town.jpg`, srcAvif: `${pathToPhotos}simons_town.avif`, srcWebp: `${pathToPhotos}simons_town.webp`, about: `Simon's Town, Cape Town`, isLandscape: true},
    {id: 8, src: `${pathToPhotos}table_mountain.jpg`, srcAvif: `${pathToPhotos}table_mountain.avif`, srcWebp: `${pathToPhotos}table_mountain.webp`, about: `Table Mountain, Cape Town`, isLandscape: true}
]