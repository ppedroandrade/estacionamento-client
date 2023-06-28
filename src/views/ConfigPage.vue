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
        <h3 class="mb-0">Configurações</h3>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="valorHora">Valor da Hora</label>
                <input type="number" id="valorHora" class="form-control" placeholder="EX: 2.00" />
              </div>
              <div class="form-group">
                <label for="tempoDesconto">Tempo para desconto</label>
                <input
                  type="number"
                  id="tempoDesconto"
                  class="form-control"
                  placeholder="De 1 - 23"
                />
              </div>
              <div class="form-group">
                <label for="tempoDescontoValor">Tempo de desconto</label>
                <input
                  type="number"
                  id="tempoDescontoValor"
                  class="form-control"
                  placeholder="Digite o tempo de desconto"
                />
              </div>
              <div class="formStyle">
                <div class="form-group col-md-4">
                  <label for="carVagas">Vagas de carro</label>
                  <input type="number" id="carVagas" class="form-control" placeholder="EX: 1" />
                </div>
                <div class="form-group col-md-4">
                  <label for="vanVagas">Vagas de van</label>
                  <input type="number" id="vanVagas" class="form-control" placeholder="EX: 5" />
                </div>
                <div class="form-group col-md-4">
                  <label for="motoVagas">Vagas de moto</label>
                  <input type="number" id="motoVagas" class="form-control" placeholder="EX: 10" />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-6">
          <div class="card-body">
            <form>
              <label for="placaCarro">Inicio do expediente</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-clock"></i></span>
                <input type="text" id="placaCarro" class="form-control" placeholder="--:--" />
              </div>
              <label for="nomeCondutor">Fim do expediente</label>
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-clock"></i></span>
                <input type="text" id="nomeCondutor" class="form-control" placeholder="--:--" />
              </div>
              <label class="form-check-label" for="flexSwitchCheckChecked">Gerar desconto</label>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                  style="height: 30px; width: 60px"
                />
              </div>
              <div class="divider"></div>
              <button class="btn btn-outline-secondary" @click="showModalRegisterBrand = true">
                Registrar um Modelo
              </button>
              <div class="divider"></div>
              <div class="btn-group gap-2 btn-group-lg">
                <button class="btn btn-outline-danger">Cancelar</button>
                <button class="btn btn-outline-secondary">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalRegisterC v-if="showModalRegisterC" @close="showModalRegisterC = false"></ModalRegisterC>
  <ModalRegisterV v-if="showModalRegisterV" @close="showModalRegisterV = false"></ModalRegisterV>
  <ModalRegisterBrand
    v-if="showModalRegisterBrand"
    @close="showModalRegisterBrand = false"
  ></ModalRegisterBrand>
</template>

<script>
import ModalRegisterC from '../components/RegisterUser.vue'
import ModalRegisterV from '../components/RegisterVihicle.vue'
import ModalRegisterBrand from '../components/RegisterBrand.vue'
export default {
  components: {
    ModalRegisterC,
    ModalRegisterV,
    ModalRegisterBrand
  },
  data() {
    return {
      showModalRegisterC: false,
      showModalRegisterV: false,
      showModalRegisterBrand: false
    }
  }
}
</script>

<style scoped>
.container1Dashboar {
  max-width: 100%;
  height: 100%;
}
.formStyle {
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.divider {
  margin: 50px;
}
</style>
