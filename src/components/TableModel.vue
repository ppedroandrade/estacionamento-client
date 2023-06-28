<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th>Modelo</th>
          <th>Marca</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in modeloList" :key="item.id" class="text-center">
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.nomeEditado" />
            </template>
            <template v-else>
              {{ item.nome }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <select class="form-select" v-model="item.marcaSelecionada">
                <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
                  {{ marca.nome }}
                </option>
              </select>
            </template>
            <template v-else>
              {{ getMarcaNome(item.marca.id) }}
            </template>
          </td>
          <td>
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
                @click="excluirModelo(item.id)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </div>
          </td>
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

import ModeloClient from '../client/modelo.client'
import MarcaClient from '../client/marca.client'
import { Modelo } from '../model/modelo'

export default {
  name: 'TableModelo',
  data() {
    return {
      modeloList: [],
      marcas: []
    }
  },
  mounted() {
    this.findAll()
    this.findAllMarcas()
  },
  methods: {
    findAll() {
      ModeloClient.findAll()
        .then((success) => {
          console.log(success)
          this.modeloList = success.map((item) => ({
            ...item,
            editavel: false,
            nomeEditado: item.nome,
            marcaSelecionada: item.marca.id
          }))
        })
        .catch((error) => {
          console.log(error)
        })
    },

    findAllMarcas() {
      MarcaClient.findAll()
        .then((success) => {
          console.log(success, 'foiiiiiiiiiiiiiiiiiiiiiii')
          this.marcas = success
        })
        .catch((error) => {
          console.log(error)
        })
    },

    getMarcaNome(marcaId) {
      const marca = this.marcas.find((marca) => marca.id === marcaId)
      return marca ? marca.nome : ''
    },

    iniciarEdicao(item) {
      item.editavel = true
    },

    cancelarEdicao(item) {
      item.editavel = false
      item.nomeEditado = item.nome
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
      item.nome = item.nomeEditado
      item.marca.id = item.marcaSelecionada

      ModeloClient.editar(item.id, item)
        .then((response) => {
          console.log('Modelo editado:', response)
          item.editavel = false
          this.exibirToast('success', 'Edição efetuada com sucesso')
        })
        .catch((error) => {
          console.error('Erro ao editar modelo:', error)
          this.exibirToast('danger', 'Erro ao editar modelo.')
        })
    },

    excluirModelo(id) {
      if (confirm('Tem certeza de que deseja excluir este modelo?')) {
        ModeloClient.excluir(id)
          .then((response) => {
            console.log('Modelo excluído:', response)
            this.exibirToast('success', 'Modelo deletado com sucesso')
            this.findAll()
          })
          .catch((error) => {
            console.error('Erro ao excluir modelo:', error)
          })
      }
    }
  }
}
</script>

<style>
/* Adicione os estilos de posicionamento do toast-container */
#toast-container {
  z-index: 9999;
  top: 0;
  left: auto;
  bottom: 20px;
  right: 20px;
  max-width: 300px;
}
</style>
