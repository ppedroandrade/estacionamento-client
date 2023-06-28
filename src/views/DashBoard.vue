<template>
  <div class="container1Dashboar overflow-x-hidden">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Sistema de Reserva</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mb-0">
            <li class="nav-item">
              <a class="nav-link" href="/home">Dash Board</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">Tabelas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">Registrar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/configuracao">Configurações</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <h3 class="mb-0">Controle de Entrada e Saída</h3>
      </div>
      <div class="card-body">
        <p class="card-text">Bem-vindo(a) ao sistema de controle de entrada e saída.</p>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card-body">
            <h1 class="card-title">Registrar entrada</h1>
            <form @submit.prevent="onClickCadastrar">
              <div class="form-group">
                <label>Selecione um veiculo</label>

                <select
                  class="form-select"
                  v-model="movimentacao.veiculo"
                  aria-label="Default select example"
                >
                  <option selected disabled value="">Selecione um Veiculo</option>
                  <option :value="item" v-for="item in veiculosList" :key="item.id">
                    {{ item.placa }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Selecione um condutor</label>

                <select
                  class="form-select"
                  v-model="movimentacao.condutor"
                  aria-label="Default select example"
                >
                  <option selected disabled value="">Selecione um Condutor</option>
                  <option :value="item" v-for="item in condutoresList" :key="item.id">
                    {{ item.nome }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Hora entrada</label>
                <input class="form-control" placeholder="" v-model="movimentacao.entrada" />
              </div>
              <div class="btn-group gap-2 btn-group-lg">
                <button class="btn btn-secondary btn-block" type="submit">
                  Efetuar Movimentação
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-6">
          <div class="card-body">
            <h1 class="card-title">Registrar Saída</h1>
            <form>
              <div class="form-group">
                <label>Selecione um veiculo</label>
                <select
                  class="form-select"
                  v-model="movimentacao.veiculo"
                  aria-label="Default select example"
                >
                  <option selected disabled value="">Selecione um Veiculo</option>
                  <option :value="item" v-for="item in veiculosList" :key="item.id">
                    {{ item.placa }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>Selecione um condutor</label>

                <select
                  class="form-select"
                  v-model="movimentacao.condutor"
                  aria-label="Default select example"
                >
                  <option selected disabled value="">Selecione um Condutor</option>
                  <option :value="item" v-for="item in condutoresList" :key="item.id">
                    {{ item.nome }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Hora saida</label>
                <input class="form-control" placeholder="" v-model="movimentacao.saida" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion border border-gray rounded" id="accordionPanelsStayOpenExample">
      <div class="accordion-item accordion-secondary">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Veiculos
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
          <div class="accordion-body">
            <TableMovimentacao />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TableMovimentacao from '../components/TableMovimentation.vue'

import MovimentacaoClient from '../client/movimentacao.client'
import VeiculoClient from '../client/veiculo.client'
import CondutorClient from '../client/condutor.client'

import { Movimentacao } from '../model/Movimentacao'
import { Condutor } from '../model/condutor'
import { Veiculo } from '../model/veiculo'

export default {
  name: 'MovimentacaoFormulario',
  components: {
    TableMovimentacao
  },
  data() {
    return {
      movimentacao: new Movimentacao(),
      condutoresList: [] as Condutor[],
      veiculosList: [] as Veiculo[]
    }
  },
  mounted() {
    this.selectCondutorList()
    this.selectVeiculosList()
  },
  methods: {
    selectCondutorList() {
      CondutorClient.findAll()
        .then((response) => {
          this.condutoresList = response
        })
        .catch((error) => {
          console.log(error)
        })
    },
    selectVeiculosList() {
      VeiculoClient.findAll()
        .then((response) => {
          this.veiculosList = response
        })
        .catch((error) => {
          console.log(error.data)
        })
    },
    onClickCadastrar() {
      MovimentacaoClient.cadastrar(this.movimentacao)
        .then((sucess) => {
          alert(sucess)
          this.movimentacao = new Movimentacao()
          alert('Movimentação efetuada com sucesso')
          window.location.reload()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    closeToast() {}
  }
}
</script>

<style scoped>
.container11 {
  max-width: 800px;
  height: 100%;
}
.divider {
  margin: 50px;
}
.container1Dashboar {
  max-width: 100%;
}
</style>
