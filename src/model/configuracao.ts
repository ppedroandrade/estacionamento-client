import { AbstractEntity } from './abstract-entity'

export class Configuracao extends AbstractEntity {
  valorHora!: number
  valorMinutoMulta!: number
  inicioExpediente!: Date
  fimExpeiente!: Date
  tempoParaDesconto!: number
  tempoDeDesconto!: number
  gerarDesconto!: boolean
  vagasMoto!: number
  vagasCarro!: number
  vagasVan!: number
}
