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
              <a class="nav-link" href="#">Configurações</a>
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
          <h3 class="mb-0">Controle de Entrada e Saída</h3>
          <button class="btn btn-outline-secondary">Efetuar um cadastro</button>
        </div>
        <div class="card-body">
          <p class="card-text">Bem-vindo(a) ao sistema de controle de entrada e saída.</p>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="card-body">
              <h1 class="card-title">Registrar entrada</h1>
              <form>
                <div class="form-group">
                  <label for="username">Placa do Carro</label>
                  <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Nome do Condutor</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Documento do Condutor</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="btn-group gap-2 btn-group-lg">
                  <button class="btn btn-secondary btn-block">Efetuar entrada</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-6">
            <div class="card-body">
              <h1 class="card-title">Registrar Saída</h1>
              <form>
                <div class="form-group">
                  <label for="username">Placa do Carro</label>
                  <input type="text" id="username" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Nome do Condutor</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="password">Documento do Condutor</label>
                  <input type="text" id="password" class="form-control" />
                </div>
                <div class="btn-group gap-2 btn-group-lg">
                  <button class="btn btn-secondary btn-block">Efetuar saída</button>
                  <button class="btn btn-secondary btn-block">Escanear Ticket</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container11 {
  max-width: 800px;
  height: 100%;
}
.container1Dashboar {
  max-width: 100%;
}
</style>
