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
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.placaEditado" />
            </template>
            <template v-else>
              {{ item.placa }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.modeloEditado" />
            </template>
            <template v-else>
              {{ item.modelo.nome }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <select class="form-select" v-model="item.corEditado">
                <option v-for="cor in Cor" :value="cor">{{ cor }}</option>
              </select>
            </template>
            <template v-else>
              {{ item.cor }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <select class="form-select" v-model="item.tipoEditado">
                <option v-for="tipo in Tipo" :value="tipo">{{ tipo }}</option>
              </select>
            </template>
            <template v-else>
              {{ item.tipo }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.anoEditado" />
            </template>
            <template v-else>
              {{ item.ano }}
            </template>
          </td>

          <div class="btn-group gap-2 btn-group-sm">
            <template v-if="item.editavel">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="salvarEdicao(item)"
              >
                <i class="bi bi-check"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="cancelarEdicao(item)"
              >
                <i class="bi bi-x"></i>
              </button>
            </template>
            <template v-else>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="iniciarEdicao(item)"
              >
                <i class="bi bi-pencil-fill"></i>
              </button>
            </template>
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="excluirCondutor(item.id)"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="toast-container" class="position-fixed bottom-0 end-0 p-3"></div>
</template>

<script>
import { Toast } from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import VeiculoClient from '../client/veiculo.client'
import { Tipo } from '../model/Enums/tipo'
import { Cor } from '../model/Enums/cor'

export default {
  name: 'TableVeicule',
  data() {
    return {
      veiculoList: [],
      Cor: Cor,
      Tipo: Tipo
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      VeiculoClient.findAll()
        .then((success) => {
          console.log(success)
          this.veiculoList = success.map((item) => ({
            ...item,
            editavel: false,
            placaEditado: item.placa,
            modeloEditado: item.modelo.nome,
            anoEditado: item.ano,
            corEditado: item.cor,
            tipoEditado: item.tipo
          }))
          this.veiculoList.forEach((veiculo) => {
            veiculo.opcoesTipo = Object.values(Tipo).filter((value) => typeof value === 'string')
            veiculo.opcoesCor = Object.values(Cor).filter((value) => typeof value === 'string')
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    iniciarEdicao(item) {
      item.editavel = true
    },
    cancelarEdicao(item) {
      item.editavel = false
      item.placaEditado = item.placa
      item.modeloEditado = item.modelo
      item.anoEditado = item.ano
      item.corEditado = item.cor
      item.tipoEditado = item.tipo
    },
    exibirToast(tipo, mensagem) {
      const toastContainer = document.getElementById('toast-container')
      const toastElement = document.createElement('div')
      toastElement.classList.add('toast')
      toastElement.classList.add(`bg-${tipo}`)
      toastElement.setAttribute('role', 'alert')
      toastElement.setAttribute('aria-live', 'assertive')
      toastElement.setAttribute('aria-atomic', 'true')
      toastElement.innerHTML = `
                <div class="toast-header">
                <strong class="me-auto">Mensagem</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">${mensagem}</div>
            `
      toastContainer.appendChild(toastElement)

      const toast = new Toast(toastElement)
      toast.show()
    },
    salvarEdicao(item) {
      item.placa = item.placaEditado
      item.modelo.nome = item.modeloEditado
      item.ano = item.anoEditado
      item.cor = item.corEditado
      item.tipo = item.tipoEditado

      VeiculoClient.editar(item.id, item)
        .then((response) => {
          console.log('Veículo editado:', response)
          item.editavel = false
          this.exibirToast('success', 'Edição efetuada com sucesso')
        })
        .catch((error) => {
          console.error('Erro ao editar veículo:', error)
          this.exibirToast('danger', 'Erro ao editar veículo.', error)
        })
    },

    excluirCondutor(id) {
      if (confirm('Tem certeza de que deseja excluir este Veiculo?')) {
        VeiculoClient.excluir(id)
          .then((response) => {
            console.log('Condutor excluído:', response)
            this.exibirToast('success', 'Veiculo deletado com sucesso')
            this.findAll()
          })
          .catch((error) => {
            console.error('Erro ao excluir Veiculo:', error)
          })
      }
    }
  }
}
</script>

<style>
#toast-container {
  z-index: 9999;
  top: 0;
  left: auto;
  bottom: 20px;
  right: 20px;
  max-width: 300px;
}
</style>
