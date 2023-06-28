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
              <input type="text" class="form-control" v-model="item.cpfEditado" />
            </template>
            <template v-else>
              {{ item.cpf }}
            </template>
          </td>
          <td>
            <template v-if="item.editavel">
              <input type="text" class="form-control" v-model="item.telefoneEditado" />
            </template>
            <template v-else>
              {{ item.telefone }}
            </template>
          </td>
          <td>{{ formatTime(item.tempoPago) }}</td>
          <td>{{ formatTime(item.tempoDesconto) }}</td>
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
                @click="excluirCondutor(item.id)"
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

import CondutorClient from '../client/condutor.client'

export default {
  name: 'TableCondutor',
  data() {
    return {
      condutorlist: []
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      CondutorClient.findAll()
        .then((success) => {
          console.log(success)
          this.condutorlist = success.map((item) => ({
            ...item,
            editavel: false,
            nomeEditado: item.nome,
            cpfEditado: item.cpf,
            telefoneEditado: item.telefone
          }))
        })
        .catch((error) => {
          console.log(error)
        })
    },

    formatTime(timeArray) {
      if (Array.isArray(timeArray)) {
        const [hours, minutes, seconds] = timeArray
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
          2,
          '0'
        )}:${String(seconds).padStart(2, '0')}`
        return timeString
      }
      if (timeArray == null) {
        return '---'
      } else {
        return timeArray
      }
    },

    iniciarEdicao(item) {
      item.editavel = true
    },

    cancelarEdicao(item) {
      item.editavel = false
      item.nomeEditado = item.nome
      item.cpfEditado = item.cpf
      item.telefoneEditado = item.telefone
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
      item.cpf = item.cpfEditado
      item.telefone = item.telefoneEditado

      CondutorClient.editar(item.id, item)
        .then((response) => {
          console.log('Condutor editado:', response)
          item.editavel = false
          this.exibirToast('success', 'Edição efetuada com sucesso')
        })
        .catch((error) => {
          console.error('Erro ao editar condutor:', error)
          this.exibirToast('danger', 'Erro ao editar condutor.', error)
        })
    },

    excluirCondutor(id) {
      if (confirm('Tem certeza de que deseja excluir este condutor?')) {
        CondutorClient.excluirCondutor(id)
          .then((response) => {
            console.log('Condutor excluído:', response)
            this.exibirToast('success', 'Usuário deletado com sucesso')
            this.findAll()
          })
          .catch((error) => {
            console.error('Erro ao excluir condutor:', error)
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
