<template>
  <div class="container">
    <h1 class="text-center mt-5">Sistema de Estacionamento</h1>
    <div class="row mt-5">
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registro de Veículos</h5>
            <p class="card-text">Registre a entrada de veículos no estacionamento.</p>
            <router-link to="/registro" class="btn btn-primary">Registrar Veículo</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Lista de Veículos</h5>
            <p class="card-text">Visualize a lista de veículos registrados.</p>
            <router-link to="/lista" class="btn btn-primary">Ver Lista</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Lista de Condutores</h5>
            <p class="card-text">Visualize a lista de Condutores registrados.</p>
            <router-link to="/lista" class="btn btn-primary">Ver Lista</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Registro de Condutores</h5>
            <p class="card-text">Registre a entrada de Condutores no estacionamento.</p>
            <router-link to="/lista" class="btn btn-primary">Ver Lista</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.container {
  max-width: 600px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}
</style>
