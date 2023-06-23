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
        <tr v-for="item in veiculos" :key="item.id" class="text-center">
          <td>{{ item.Placa }}</td>
          <td>{{ item.Modelo }}</td>
          <td>{{ item.Cor }}</td>
          <td>{{ item.Tipo }}</td>
          <td>{{ item.Ano }}</td>
          <td>
            <div class="btn-group gap-2 btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="editarVeiculo(item)"
              >
                <i class="bi bi-pencil-fill"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="excluirVeiculo(item)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      veiculos: [], // Array para armazenar os veículos
      condutores: [] // Array para armazenar os condutores
    }
  },
  created() {
    // Carregar os veículos da API
    this.carregarVeiculos()
    // Carregar os condutores da API
    this.carregarCondutores()
  },
  methods: {
    carregarVeiculos() {
      // Chamar a API para carregar os veículos e atribuir ao array veiculos
      // Exemplo:
      this.veiculos = [
        {
          id: 1,
          Modelo: 'Celta',
          Cor: 'Preto',
          Tipo: 'Carro',
          Placa: 'ABC-1234',
          Ano: '1234'
        },
        {
          id: 2,
          Modelo: 'Celta',
          Cor: 'Preto',
          Tipo: 'Carro',
          Placa: 'ABC-1234',
          Ano: '1234'
        },
        {
          id: 3,
          Modelo: 'Celta',
          Cor: 'Preto',
          Tipo: 'Carro',
          Placa: 'ABC-1234',
          Ano: '1234'
        }
      ]
    },
    carregarCondutores() {
      // Chamar a API para carregar os condutores e atribuir ao array condutores
      // Exemplo:
      this.condutores = [
        {
          id: 1,
          Nome: 'Pedro',
          Cpf: '99999999',
          Telefone: '99999999',
          TempoPago: '7,7',
          TempoDesconto: '5'
        },
        {
          id: 2,
          Nome: 'Pedro',
          Cpf: '99999999',
          Telefone: '99999999',
          TempoPago: '7,7',
          TempoDesconto: '5'
        },
        {
          id: 3,
          Nome: 'Pedro',
          Cpf: '99999999',
          Telefone: '99999999',
          TempoPago: '7,7',
          TempoDesconto: '5'
        }
      ]
    }
  }
}
</script>
