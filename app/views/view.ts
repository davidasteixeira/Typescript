export class View<T> {
    protected elemento: HTMLElement;

    constructor(selector:string){
        this.elemento = document.querySelector(selector);
    }

    update(model:T):void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model:T): string {
        throw new Error('Classe filha precisa implementar o método')
    }
}