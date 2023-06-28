<template>
  <div class="container11">
    <h3>Registrar um Veículo Novo</h3>
    <form @submit.prevent="cadastrarVeiculo">
      <div class="form-group">
        <label for="placa">Placa do Carro</label>
        <input type="text" id="placa" class="form-control" v-model="veiculo.placa" />
      </div>
      <div class="form-group">
        <label>Modelo</label>
        <select class="form-select" aria-label="Default select example" v-model="veiculo.modelo">
          <option :value="item" v-for="item in modelosList" :key="item.id">{{ item.nome }}</option>
        </select>
      </div>
      <div class="form-group">
        <label> Cor </label>
        <select class="form-select" aria-label="Default select example" v-model="veiculo.cor">
          <option selected disabled value="">Selecione o cor de o veiculo</option>
          <option :value="item" v-for="item in coloresList" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="form-group">
        <label>Tipo</label>
        <select class="form-select" aria-label="Default select example" v-model="veiculo.tipo">
          <option v-for="opcao in opcoesTipo" :value="opcao">{{ opcao }}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Ano</label>
        <input type="text" id="ano" class="form-control" v-model="veiculo.ano" />
      </div>
      <button class="btn btn-secondary" type="submit">Finalizar Cadastro</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Tipo } from '../model/Enums/tipo'
import { Cor } from '../model/Enums/cor'

import { Veiculo } from '../model/veiculo'
import VeiculoClient from '../client/veiculo.client'

import { Modelo } from '../model/modelo'
import ModeloClient from '../client/modelo.client'

export default {
  name: 'FormRegisterV',
  data() {
    return {
      tipoSelecionado: null,
      coloresList: Object.values(Cor).filter((value) => typeof value === 'string'),
      opcoesTipo: Object.values(Tipo).filter((value) => typeof value === 'string'),
      modelosList: [] as Modelo[],
      veiculo: new Veiculo()
    }
  },
  methods: {
    cadastrarVeiculo() {
      VeiculoClient.cadastrar(this.veiculo)
        .then(() => {
          alert('Registro feito com sucesso')
          this.resetForm()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectModeloList() {
      ModeloClient.findAll()
        .then((response) => {
          this.modelosList = response
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    resetForm() {
      this.veiculo = new Veiculo()
      this.tipoSelecionado = null
      this.corSelecionada = null
    }
  },
  mounted() {
    this.selectModeloList()
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
