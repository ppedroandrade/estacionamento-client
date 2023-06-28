<template>
  <div class="container11">
    <h3>Registrar um Condutor Novo</h3>

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
        <input type="text" id="telefone" class="form-control" v-model="condutor.telefone" />
      </div>
      <button class="btn btn-secondary btn-block" type="submit">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script>
import CondutorClient from '../client/condutor.client'
import { Condutor } from '../model/condutor'

export default {
  name: 'FormRegisterV',
  data() {
    return {
      condutor: new Condutor()
    }
  },
  methods: {
    cadastrarCondutor() {
      CondutorClient.cadastrar(this.condutor)
        .then((success) => {
          console.log(success)
          alert('Registro Realizado')
          window.location.reload()
        })
        .catch((error) => {
          console.error(error)
          alert(error.data)
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
