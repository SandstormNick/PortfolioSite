export class Quote {
    id: number;
    quote: string;
    author?: string;

    constructor(id: number, quote: string, author?: string) {
        this.id = id;
        this.quote = quote;
        this.author = author;
    }
}

export const quoteData = [
    {id: 1, quote: `Work hard in silence, let your success be your noise.`},
    {id: 2, quote: `It's no use going back to yesterday, because I was a different person then.`, author: `Lewis Carroll`},
    {id: 3, quote: `Experience is one thing you can't get for nothing.`, author: `Oscar Wilde`},
    {id: 4, quote: `If you take too long to decide what to do with your life, you'll find you've done it.` },
    {id: 5, quote: `The grass is greener where you water it.`, author: `Neil Barringham`},
]