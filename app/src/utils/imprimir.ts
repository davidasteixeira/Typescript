import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objetos: any[]){
    for(let objeto of objetos){
        console.log(objeto.paraTexto());
    }
}