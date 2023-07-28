export default class Moeda {
  static formartar(valor: number){
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency:'BRL'
    }).format(valor)
  }
}