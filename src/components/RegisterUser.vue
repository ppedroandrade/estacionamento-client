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
              <form>
                <div class="form-group">
                  <label for="username">Nome</label>
                  <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">CPF</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Telefone</label>
                  <input type="text" id="password" class="form-control" />
                </div>
              </form>
              <button class="btn btn-secondary btn-block">Finalizar Cadastro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ModalRegisterV',
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
