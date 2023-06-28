<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th>Marca</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in marcalist" :key="item.id" class="text-center">
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.nomeEditado" />
            </template>
            <template v-else>
              {{ item.nome }}
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
                @click="excluirMarca(item.id)"
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

import MarcaClient from '../client/marca.client'

export default {
  name: 'TableMarca',
  data() {
    return {
      marcalist: []
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      MarcaClient.findAll()
        .then((success) => {
          console.log(success)
          this.marcalist = success.map((item) => ({
            ...item,
            editavel: false,
            nomeEditado: item.nome
          }))
        })
        .catch((error) => {
          console.log(error)
          alert(error.data)
        })
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

      MarcaClient.editar(item.id, item)
        .then((response) => {
          console.log('Marca editada:', response)
          item.editavel = false
          this.exibirToast('success', 'Edição efetuada com sucesso')
          window.location.reload()
        })
        .catch((error) => {
          console.error('Erro ao editar marca:', error)
          this.exibirToast('danger', 'Erro ao editar marca.', error)
        })
    },

    excluirMarca(id) {
      if (confirm('Tem certeza de que deseja excluir esta marca?')) {
        MarcaClient.excluir(id)
          .then((response) => {
            console.log('Marca excluída:', response)
            this.exibirToast('success', 'Marca deletada com sucesso')
            this.findAll()
          })
          .catch((error) => {
            console.error('Erro ao excluir marca:', error)
            alert(error.data)
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
