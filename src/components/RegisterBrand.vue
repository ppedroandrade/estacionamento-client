<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Registrar um Novo Modelo</h3>
          <button type="button" class="btn btn-outline-secondary" @click="closeModal">
            Cancelar
          </button>
        </div>
        <div class="modal-body">
          <h1 class="modal-title">Informações do Modelo</h1>
          <form @submit.prevent="cadastrarModelo">
            <div class="form-group">
              <label>Nome</label>
              <input type="text" class="form-control" v-model="modelo.nome" />
            </div>
            <div class="form-group">
              <label for="password">Marca</label>

              <select
                class="form-select"
                aria-label="Default select example"
                style="border: 1.5px solid #ccc"
                v-model="tipoSelecionado"
              >
                <option v-for="marca in opcoesMarca" :value="marca">{{ marca.nome }}</option>
              </select>
            </div>
            <button class="btn btn-secondary btn-block" type="submit">Finalizar Cadastro</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ModeloClient } from '../client/modelo.client'
import { Modelo } from '../model/modelo'
import { Marca } from '../model/marca'
import { MarcaClient } from '../client/marca.client'

export default {
  name: 'ModalRegisterBrand',
  data() {
    return {
      modelo: new Modelo(),
      marcaSelecionada: null,
      opcoesMarca: Object.values(Marca).filter((value) => typeof value === 'string')
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    cadastrarModelo() {
      const modeloClient = new ModeloClient() // Crie uma instância de ModeloClient
      modeloClient
        .cadastrar(this.modelo)
        .then(() => {
          this.closeModal()
          alert('Registro feito com sucesso')
          // window.location.reload()
        })
        .catch((error) => {
          console.error(error)
          alert('Erro ao cadastrar o modelo')
        })
    },
    marcaList() {
      MarcaClient.findAll()
        .then((response) => (this.opcoesMarca = response))
        .catch((error) => {})
    },
    mounted() {
      this.marcaList()
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
