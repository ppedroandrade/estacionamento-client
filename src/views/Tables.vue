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
              <a class="nav-link" href="/about">Condutores/veiculos</a>
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
        <h3 class="mb-0">Informações sobre Condutores/veiculos</h3>
        <div class="btn-group gap-2">
          <button class="btn btn-outline-secondary" @click="showModalRegisterC = true">
            Registrar um Condutor
          </button>
          <buttton class="btn btn-outline-secondary" @click="showModalRegisterV = true"
            >Registar um Veiculo</buttton
          >
        </div>
      </div>
    </div>
    <div class="container1 mt-4">
      <div class="container-sm">
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
                Condutores
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <TableUsers />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Veículos
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <TableVeicules />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ModalRegisterC v-if="showModalRegisterC" @close="showModalRegisterC = false"></ModalRegisterC>
  <ModalRegisterV v-if="showModalRegisterV" @close="showModalRegisterV = false"></ModalRegisterV>
</template>

<script>
import TableUsers from '../components/TableConductor.vue'
import TableVeicules from '../components/TableVeicule.vue'
import ModalRegisterC from '../components/RegisterUser.vue'
import ModalRegisterV from '../components/RegisterVihicle.vue'

export default {
  components: {
    TableUsers,
    TableVeicules,
    ModalRegisterC,
    ModalRegisterV
  },
  data() {
    return {
      showModalRegisterC: false,
      showModalRegisterV: false
    }
  }
}
</script>

<style scoped>
.container1Dashboar {
  max-width: 100%;
}

.container1 {
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.table-responsive {
  max-height: 900px;
  overflow-y: auto;
}
</style>
