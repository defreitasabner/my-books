export class Book {

    private static id_count: number = 0;
    private _id: number;
    private _timestamp: Date;

    constructor(
        private _title: string,
        private _author: string, 
        private _genders: string[], 
        private _pageNumber: number,
    ){
        this._id = Book.id_count;
        Book.id_count += 1;
        this._timestamp = new Date();
    };

    get id(): number {
        return this._id;
    }

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

    get timestamp(): Date {
        const timestampCopy = new Date(this._timestamp.getTime());
        return timestampCopy;
    }

    public static createFromStrings(
        title: string, 
        author: string, 
        genders: string, 
        pageNumber: string,
    ) : Book {
        const listGendersTreated: string[] = genders.split(',').map(
            (gender) => gender.split(' ').join('').toLowerCase()
        );
        const pageNumberTreated = Number(pageNumber);
        return new Book(
            title,
            author,
            listGendersTreated,
            pageNumberTreated,
        );
    }

}