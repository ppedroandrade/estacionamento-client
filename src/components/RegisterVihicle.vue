<template>
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title">Registar Um Veiculo Novo</h3>
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
              <form>
                <div class="form-group">
                  <label for="username">Placa do Carro</label>
                  <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Modelo</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Marca</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Cor</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style="border: 1.5px solid #ccc"
                    v-model="corSelecionada"
                  >
                    <option v-for="cor in opcoesCor" :value="cor">{{ cor }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="password">Tipo</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style="border: 1.5px solid #ccc"
                    v-model="tipoSelecionado"
                  >
                    <option v-for="opcao in opcoesTipo" :value="opcao">{{ opcao }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="password">Ano</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <button class="btn btn-secondary btn-block">Finalizar Cadastro</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Tipo } from '../model/Enums/tipo'
import { Cor } from '../model/Enums/cor'

export default {
  name: 'ModalRegisterV',
  data() {
    return {
      tipoSelecionado: null,
      corSelecionada: null,
      opcoesTipo: Object.values(Tipo).filter((value) => typeof value === 'string'),
      opcoesCor: Object.values(Cor).filter((value) => typeof value === 'string')
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
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
