export abstract class View<T> {

    protected parentElement: HTMLElement; // its like private, but could be accessed by child

    constructor(parentElementReference: string) {
        const element = document.querySelector(parentElementReference);
        if(element) {
            this.parentElement = element as HTMLElement;
        } else {
            throw Error(`HTMLElement reference by ${parentElementReference} do not exist in DOM.`);
        }
    }

    protected abstract template(model: T): string;

    public render(model: T): void {
        this.parentElement.innerHTML = this.template(model);
    }
}