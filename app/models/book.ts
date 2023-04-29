export class Book {
    private _title;
    private _author;
    private _genders;
    private _pageNumber;

    constructor(title, author, genders, pageNumber) {
        this._title = title,
        this._author = author,
        this._genders = genders,
        this._pageNumber = pageNumber
    };

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get genders() {
        return this._genders;
    }

    get pageNumber() {
        return this._pageNumber;
    }


}