<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th>Placa</th>
          <th>Modelo</th>
          <th>Cor</th>
          <th>Tipo</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in veiculoList" :key="item.id" class="text-center">
          <td>{{ item.placa }}</td>
          <td>{{ item.modelo.nome }}</td>
          <td>{{ item.cor }}</td>
          <td>{{ item.tipo }}</td>
          <td>{{ item.ano }}</td>
          <td>
            <div class="btn-group gap-2 btn-group-sm">
              <button type="button" class="btn btn-outline-secondary btn-sm">
                <i class="bi bi-pencil-fill"></i>
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm">
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import VeiculoClient from '../client/veiculo.client'
import { Veiculo } from '../model/veiculo'
export default {
  name: 'TableVeicule',
  data() {
    return {
      veiculoList: new Array<Veiculo>()
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      VeiculoClient.listaAll()
        .then((success: Veiculo[]) => {
          console.log(success)
          this.veiculoList = success
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getFormattedValue(item: any, field: string): string {
    const fieldPath = field.split('.')
    let value = item

    for (const key of fieldPath) {
      value = value[key]

      if (value === undefined) {
        return ''
      }
    }

    if (field === 'saida' && value === null) {
      return 'Em aberto'
    } else if (field === 'ativo') {
      return value ? 'Ativo' : 'Desativo'
    } else {
      return String(value)
    }
  }
}
</script>
