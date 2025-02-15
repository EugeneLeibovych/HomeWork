const game = {
    _title: "The Witcher 3",
    _genre: "RPG",
    _year: 2015,
    developer: {
        _name: "CD Projekt Red",
        _country: "Poland",
        get details() {
            return `${this._name} (${this._country})`;
        },
        set details(newDetails) {
            const [name, country] = newDetails.split(", ");
            if (name && country) {
                this._name = name;
                this._country = country;
            }
        }
    },
    get gameInfo() {
        return `${this._title} - ${this._genre} (${this._year})`;
    },
    set gameInfo(info) {
        const [title, genre, year] = info.split(" - ");
        if (title && genre && !isNaN(year)) {
            this._title = title;
            this._genre = genre;
            this._year = Number(year);
        }
    },
    get year() {
        return this._year;
    },
    set year(value) {
        if (value > 1970) {
            this._year = value;
        }
    },
    updateYear() {
        this._year++;
        return this._year;
    }
};

console.log("Інформація про гру:", game.gameInfo);
game.gameInfo = "Cyberpunk 2077 - Action RPG - 2020";
console.log("Оновлена інформація:", game.gameInfo);
console.log("Розробник:", game.developer.details);
game.developer.details = "Rockstar Games, USA";
console.log("Оновлений розробник:", game.developer.details);
console.log("Рік виходу до оновлення:", game.year);
console.log("Рік виходу після оновлення:", game.updateYear());
