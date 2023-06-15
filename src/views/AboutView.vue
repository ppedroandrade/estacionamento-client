<template>
  <div class="container">
    <h1 class="text-center mt-5">Controle de Entrada e Saída de Veículos</h1>
    <div class="mt-5">
      <div class="d-flex justify-content-between mb-3">
        <button class="btn btn-primary" @click="registrarEntrada">Registrar Entrada</button>
        <button class="btn btn-primary" @click="registrarSaida">Registrar Saída</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th class="bg-primary text-white">Condutor</th>
            <th class="bg-primary text-white">Carro</th>
            <th class="bg-primary text-white">Placa</th>
            <th class="bg-primary text-white">Modelo</th>
            <th class="bg-primary text-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(veiculo, index) in veiculos" :key="index">
            <td>{{ veiculo.condutor }}</td>
            <td>{{ veiculo.carro }}</td>
            <td>{{ veiculo.placa }}</td>
            <td>{{ veiculo.modelo }}</td>
            <td>
              <button class="btn btn-danger btn-sm m-1" @click="excluirVeiculo(index)">
                <i class="bi bi-trash-fill"></i>
              </button>
              <button class="btn btn-primary btn-sm m-1" @click="editarVeiculo(index)">
                <i class="bi bi-pencil-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'ControleVeiculos',
  data() {
    return {
      veiculos: [
        { condutor: 'João', carro: 'Fiat', placa: 'ABC-1234', modelo: 'Uno' },
        { condutor: 'Maria', carro: 'Volkswagen', placa: 'DEF-5678', modelo: 'Gol' },
        { condutor: 'Pedro', carro: 'Ford', placa: 'GHI-9012', modelo: 'Fiesta' },
        { condutor: 'Ana', carro: 'Chevrolet', placa: 'JKL-3456', modelo: 'Onix' }
      ]
    }
  },
  methods: {
    registrarEntrada() {
      // Lógica para registrar a entrada do veículo
      const condutor = prompt('Digite o nome do condutor:')
      const carro = prompt('Digite o nome do carro:')
      const placa = prompt('Digite a placa do carro:')
      const modelo = prompt('Digite o modelo do carro:')

      if (condutor && carro && placa && modelo) {
        this.veiculos.push({ condutor, carro, placa, modelo })
        console.log('Registro de entrada:', { condutor, carro, placa, modelo })
      } else {
        console.log('Registro de entrada cancelado.')
      }
    },
    registrarSaida() {
      // Lógica para registrar a saída do veículo
      const placa = prompt('Digite a placa do veículo a ser registrado a saída:')

      if (placa) {
        const veiculo = this.veiculos.find((v) => v.placa === placa)

        if (veiculo) {
          const confirmacao = confirm(`Deseja registrar a saída do veículo com placa ${placa}?`)

          if (confirmacao) {
            this.veiculos = this.veiculos.filter((v) => v.placa !== placa)
            console.log('Registro de saída:', veiculo)
          } else {
            console.log('Registro de saída cancelado.')
          }
        } else {
          console.log(`Veículo com placa ${placa} não encontrado.`)
        }
      } else {
        console.log('Registro de saída cancelado.')
      }
    },
    excluirVeiculo(index) {
      // Lógica para excluir o veículo
      const confirmacao = confirm('Deseja excluir este veículo?')

      if (confirmacao) {
        const veiculo = this.veiculos[index]
        this.veiculos.splice(index, 1)
        console.log('Veículo excluído:', veiculo)
      }
    },
    editarVeiculo(index) {
      // Lógica para editar o veículo
      const veiculo = this.veiculos[index]
      const condutor = prompt(`Digite o nome do condutor (${veiculo.condutor}):`, veiculo.condutor)
      const carro = prompt(`Digite o nome do carro (${veiculo.carro}):`, veiculo.carro)
      const placa = prompt(`Digite a placa do carro (${veiculo.placa}):`, veiculo.placa)
      const modelo = prompt(`Digite o modelo do carro (${veiculo.modelo}):`, veiculo.modelo)

      if (condutor && carro && placa && modelo) {
        this.veiculos[index] = { condutor, carro, placa, modelo }
        console.log('Veículo editado:', { condutor, carro, placa, modelo })
      } else {
        console.log('Edição de veículo cancelada.')
      }
    }
  }
}
</script>

<style>
.container {
  max-width: 800px;
}

.mt-5 {
  margin-top: 5rem;
}

.mb-3 {
  margin-bottom: 1.5rem;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #007bff;
  color: #fff;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
}
</style>
