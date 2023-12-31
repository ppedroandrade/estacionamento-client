import { AbstractEntity } from './abstract-entity'
import { Condutor } from './condutor'
import { Veiculo } from './veiculo'

export class Movimentacao extends AbstractEntity {
  veiculo!: Veiculo
  condutor!: Condutor
  entrada!: Date
  saida!: Date
  tempo!: Date
  tempoDesconto!: Date
  tempoMulta!: number
  valorHora!: number
  valorDesconto!: number
  valorMulta!: number
  valorTotal!: number
  valorMinutoMulta!: number

  constructor() {
    super()
    this.veiculo = new Veiculo()
    this.condutor = new Condutor()
  }
}
