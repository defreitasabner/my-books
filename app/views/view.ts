export abstract class View<T> {

    protected parentElement: HTMLElement; // its like private, but could be accessed by child

    constructor(parentElementReference: string) {
        this.parentElement = document.querySelector(parentElementReference);
    }

    abstract template(model: T): string;

    render(model: T): void {
        this.parentElement.innerHTML = this.template(model);
    }
}