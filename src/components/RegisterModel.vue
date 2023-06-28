<template>
  <div class="container11">
    <h3>Registrar um Modelo Novo</h3>
    <form @submit.prevent="cadastrarModelo">
      <div class="form-group">
        <label class="form-label">Nome do Modelo</label>
        <input class="form-control" placeholder="" v-model="modelo.nome" />
      </div>
      <div class="form-group">
        <label> Marca </label>
        <select class="form-select" v-model="modelo.marca" aria-label="Marca select">
          <option selected disabled value="">Selecione uma marca</option>
          >
          <option :value="item" v-for="item in marcasList" :key="item.id">
            {{ item.nome }}
          </option>
        </select>
      </div>
      <button class="btn btn-secondary btn-block" type="submit">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script lang="ts">
import ModeloClient from '../client/modelo.client'
import MarcaClient from '../client/marca.client'
import { Modelo } from '../model/modelo'
import { Marca } from '../model/marca'

export default {
  name: 'FormRegisterModel',
  data() {
    return {
      modelo: new Modelo(),
      marcasList: [] as Marca[]
    }
  },
  mounted() {
    this.selectMarcaList()
  },
  methods: {
    selectMarcaList() {
      MarcaClient.findAll()
        .then((response) => {
          this.marcasList = response
        })
        .catch((error) => {
          console.log(error)
          alert(error.data)
        })
    },
    cadastrarModelo() {
      ModeloClient.cadastrar(this.modelo)
        .then((sucess) => {
          this.modelo = new Modelo()
          alert('Criado com sucesso')
          window.location.reload()
        })
        .catch((error) => {
          console.log(error, 'aqui')
          alert(error.data)
        })
    }
  }
}
</script>

<style lang="scss"></style>
