export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    template(model) {
        throw new Error('Classe filha precisa implementar o método');
    }
}
