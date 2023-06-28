<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <thead>
        <tr class="text-center">
          <th scope="col">Placa</th>
          <th scope="col">Condutor</th>
          <th scope="col">Hora entrada</th>
          <th scope="col">Hora saída</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in movimentacaoList" :key="item.id" class="text-center">
          <td>{{ item.veiculo.placa }}</td>
          <td>{{ item.condutor.nome }}</td>
          <td>{{ formatTime(item.entrada) }}</td>
          <td>{{ formatTime(item.saida) }}</td>
          <td>
            <div class="btn-group gap-2 btn-group-sm">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="iniciarEdicao(item)"
              >
                <i class="bi bi-pencil-fill"></i>
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="excluirMovimentacao(item.id)"
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

import MovimentacaoClient from '../client/movimentacao.client'
import { Movimentacao } from '../model/Movimentacao'

export default {
  name: 'TableMovimentacao',
  data() {
    return {
      movimentacaoList: []
    }
  },
  mounted() {
    this.findAll()
  },
  methods: {
    findAll() {
      MovimentacaoClient.findAll()
        .then((success) => {
          console.log(success)
          this.movimentacaoList = success
        })
        .catch((error) => {
          console.log(error)
          alert(error.data)
        })
    },

    iniciarEdicao(item) {
      // Lógica para iniciar a edição
    },
    formatTime(timeArray) {
      if (Array.isArray(timeArray)) {
        const [hours, minutes] = timeArray
        const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
        return timeString
      }
      if (timeArray == null) {
        return '---'
      } else {
        return timeArray
      }
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

    excluirMovimentacao(id) {
      if (confirm('Tem certeza de que deseja excluir esta movimentação?')) {
        MovimentacaoClient.excluir(id)
          .then((response) => {
            console.log('Movimentação excluída:', response)
            this.exibirToast('success', 'Movimentação deletada com sucesso')
            this.findAll()
          })
          .catch((error) => {
            console.error('Erro ao excluir movimentação:', error)
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
