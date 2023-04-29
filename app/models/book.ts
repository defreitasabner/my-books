export class Book {

    constructor(
        private _title: string,
        private _author: string, 
        private _genders: string[], 
        private _pageNumber: number
    ){};

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