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
        <h3 class="mb-0">Visualizar Registros</h3>
        <div class="btn-group gap-2"></div>
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
                Veiculos
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <TableVeicules />
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
                Condutores
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
              <div class="accordion-body">
                <TableUsers />
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Marcas
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <TableBrand />
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  Modelos
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse show">
                <div class="accordion-body">
                  <TableModelo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableUsers from '../components/TableConductor.vue'
import TableVeicules from '../components/TableVeicule.vue'
import TableBrand from '../components/TableBrand.vue'
import TableModelo from '../components/TableModel.vue'

export default {
  components: {
    TableUsers,
    TableVeicules,
    TableBrand,
    TableModelo
  },
  data() {}
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
