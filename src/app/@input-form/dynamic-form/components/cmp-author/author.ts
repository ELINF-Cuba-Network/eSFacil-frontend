export class Author {
    constructor(
        public family?: string,
        public given?: string,
        public uri?: string,
        public affiliation?: Affilation
    ) {}
}

export class Affilation {
    constructor(
        public name?: string,
        public uri?: string
    ) {}
}
