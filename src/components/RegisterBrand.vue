<template>
  <div class="container11">
    <h3>Registrar uma Marca Nova</h3>
    <form @submit.prevent="cadastrarMarca">
      <div class="form-group">
        <label>Nome</label>
        <input type="text" class="form-control" v-model="marca.nome" />
      </div>
      <button class="btn btn-secondary btn-block" type="submit">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script>
import MarcaClient from '../client/marca.client'
import { Marca } from '../model/marca'

export default {
  name: 'FormRegisterBrand',
  data() {
    return {
      marca: new Marca()
    }
  },
  methods: {
    cadastrarMarca() {
      MarcaClient.cadastrar(this.marca)
        .then((sucess) => {
          this.marca = new Marca()
          alert('Sua Marca foi cadastrada com sucesso')
        })
        .catch((error) => {
          alert('Sua Marca teve um problema no cadastro', error.message)
        })
    }
  }
}
</script>

<style scoped></style>
