<template>
  <div class="containerDashboar">
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Reservas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Clientes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Configurações</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <div class="card">
        <div class="card-header">
          <h3 class="mb-0">Controle de Entrada e Saída</h3>
        </div>
        <div class="card-body">
          <p class="card-text">Bem-vindo(a) ao sistema de controle de entrada e saída.</p>
          <!-- Adicione aqui mais elementos para o controle de entrada e saída -->
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.container {
  max-width: 800px;
}

.card {
  border: none;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: var(--primary);
  color: var(--light);
  padding: 1.5rem;
}

.card-header h3 {
  margin-bottom: 0;
}

.card-body {
  padding: 1.5rem;
}
</style>
