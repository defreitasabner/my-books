export class Book {
    private _title: string;
    private _author: string;
    private _genders: string[];
    private _pageNumber: number;

    constructor(title: string, author: string, genders: string[], pageNumber: number) {
        this._title = title,
        this._author = author,
        this._genders = genders,
        this._pageNumber = pageNumber
    };

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get genders(): string[] {
        return this._genders;
    }

    get pageNumber(): number {
        return this._pageNumber;
    }


}