import { AbstractEntity } from './abstract-entity'

export class Condutor extends AbstractEntity {
  id!: number
  nome!: string
  cpf!: string
  telefone!: string
  tempoPago!: Date
  tempoDesconto!: Date
}
