export {Chess, Football};

export interface IGame {
    play(): void;
}


abstract class Game implements IGame {
    protected title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public abstract play(): void;
}


class Chess extends Game {
    public constructor() {
        super('Chess');
    }

    public play(): void {
        console.log(`Playing '${this.title}'.`);
    }
}


class Football extends Game {
    public constructor() {
        super('Football');
    }

    public play(): void {
        console.log(`Playing '${this.title}'.`);
    }
}
