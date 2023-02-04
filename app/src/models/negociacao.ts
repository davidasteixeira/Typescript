import { Modelo } from "../interface/modelo.js";

export class Negociacao implements Modelo<Negociacao>{

    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ){}

    public static  criaDe(dataString:string, quantidadeString:string, valorString:string): Negociacao{
        const exp = /-/g;
        const data = new Date(dataString.replace(exp,','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }

    get data(): Date{
        const data = new Date(this._data.getTime());
        return data;
    }

    public paraTexto(): string{
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade}
        Valor: ${this.valor}
        `;
    }

    public ehIgual(negociacao:Negociacao): boolean{
        return this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
    
    get volume(): number {
        return this._quantidade * this._valor;
    }

}