import { AbstractEntity } from './abstract-entity'
import { Modelo } from './modelo'
import { Cor } from './Enums/cor'
import { Tipo } from './Enums/tipo'

export class Veiculo extends AbstractEntity {
  placa!: string
  modelo!: Modelo
  cor!: Cor
  tipo!: Tipo
  ano!: number

  constructor() {
    super()
    this.modelo = new Modelo()
  }
}
