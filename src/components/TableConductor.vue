<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Tempo Pago</th>
          <th>Tempo Desconto</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in condutorlist" :key="item.id" class="text-center">
          <td>{{ item.nome }}</td>
          <td>{{ item.cpf }}</td>
          <td>{{ item.telefone }}</td>
          <td>{{ item.temmpoDesconto }}</td>
          <td>{{ item.temmpoDesconto }}</td>
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
import CondutorClient from '../client/condutor.client'
import { Condutor } from '../model/condutor'

export default {
  name: 'TableCondutor',
  data() {
    return {
      condutorlist: new Array<Condutor>()
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      CondutorClient.listaAll()
        .then((success: Condutor[]) => {
          console.log(success)
          this.condutorlist = success
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<!-- created() {
    this.carregarCondutores()
  },
  methods: {
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
  } -->
