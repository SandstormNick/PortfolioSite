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
    {id: 6, quote: `Show me a person who never made a mistake, and I will show you a person who never did anything.`, author: `William Rosenberg`},
    {id: 7, quote: `Seek inspiration for it's a state of mind that can make a man divine.`, author: `Vishal Kapoor`},
    {id: 8, quote: `Always go too far, because that's where you'll find the truth.`, author: `Albert Camus`},
]