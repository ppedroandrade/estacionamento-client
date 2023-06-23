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
    <div class="container1 mt-4">
      <div class="card">
        <div class="card-header d-flex justify-content-between">
          <h3 class="mb-0">Registar Um Cliente Novo</h3>
          <router-link to="/home" class="btn btn-outline-secondary">Cancelar</router-link>
        </div>
        <div class="card-body">
          <p class="card-text"></p>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="card-body">
              <h1 class="card-title">Informações do Veículo</h1>
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
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Tipo</label>

                  <select
                    class="form-select"
                    aria-label="Default select example"
                    style="border: 1.5px solid #ccc"
                  >
                    <option value="1">Carro</option>
                    <option value="2">Moto</option>
                    <option value="3">Van</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="password">Ano</label>
                  <input type="text" id="password" class="form-control" />
                </div>
              </form>
            </div>
          </div>
          <div class="col-6">
            <div class="card-body">
              <h1 class="card-title">Dados do condutor</h1>
              <form>
                <div class="form-group">
                  <label for="username">Nome</label>
                  <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Documento</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Telefone</label>
                  <input type="text" id="password" class="form-control" />
                </div>
              </form>
              <router-link to="/home" class="btn btn-secondary btn-block"
                >Finalizar Cadastro</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
</script>

<style scoped>
.container11 {
  max-width: 800px;
  height: 100%;
}
.container1Dashboar {
  max-width: 100%;
}
</style>
