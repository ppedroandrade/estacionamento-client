import { AbstractEntity } from './abstract-entity'

export class Condutor extends AbstractEntity {
  nome!: string
  cpf!: string
  telefone!: string
  tempoPago!: Date
  temmpoDesconto!: Date
}
