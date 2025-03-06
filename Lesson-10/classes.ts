export {Chess, Football};

export interface IGame {
    play(): string;
}

export interface IBallGame {
    getBall(): string;
}

abstract class Game implements IGame {
    protected title: string;

    public constructor(title: string) {
        this.title = title;
    }

    public abstract play(): string;
}


class Chess extends Game {
    public constructor() {
        super('Chess');
    }

    public play(): string {
        return `Playing '${this.title}'.`;
    }
}


class Football extends Game implements IBallGame {
    public constructor() {
        super('Football');
    }

    public play(): string {
        return `Playing '${this.title}'.`;
    }
    public getBall(): string {
        return 'Getting to play football.';
    }
}
