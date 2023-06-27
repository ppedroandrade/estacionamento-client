<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Registar Um Cliente Novo</h3>
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">
            Cancelar
          </button>
        </div>
        <div class="modal-body">
          <p class="card-text"></p>
        </div>
        <div class="row">
          <div class="col-9">
            <div class="modal-body">
              <h1 class="modal-title">Informações do Condutor</h1>
              <form @submit.prevent="cadastrarCondutor">
                <div class="form-group">
                  <label for="username">Nome</label>
                  <input type="text" id="username" class="form-control" v-model="condutor.nome" />
                </div>
                <div class="form-group">
                  <label for="cpf">CPF</label>
                  <input type="text" id="cpf" class="form-control" v-model="condutor.cpf" />
                </div>
                <div class="form-group">
                  <label for="telefone">Telefone</label>
                  <input
                    type="text"
                    id="telefone"
                    class="form-control"
                    v-model="condutor.telefone"
                  />
                </div>
                <button class="btn btn-secondary btn-block" type="submit">
                  Finalizar Cadastro
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CondutorClient from '../client/condutor.client'
import { Condutor } from '../model/condutor'

export default {
  name: 'ModalRegisterV',
  data() {
    return {
      condutor: new Condutor() // Instância vazia de Condutor
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    cadastrarCondutor() {
      CondutorClient.cadastrar(this.condutor)
        .then(() => {
          this.closeModal()
        })
        .catch((error) => {
          // Tratar o erro e exibir uma mensagem de erro, se necessário
        })
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-dialog {
  max-width: 800px;
  height: 100%;
}

.modal-content {
  max-width: 100%;
}
</style>
