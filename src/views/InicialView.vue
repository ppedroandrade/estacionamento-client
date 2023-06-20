<template>
  <div class="background">
    <div class="overlay"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="login-box">
            <div class="row no-gutters">
              <div class="col-md-4 bg-dark">
                <div class="welcome-text">
                  <h2 class="card-title">Bem-vindo!</h2>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h1 class="card-title">Estacionamento Simas Turbo</h1>
                  <form>
                    <div class="form-group">
                      <label for="username">Nome de usuário</label>
                      <input type="text" id="username" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="password">Senha</label>
                      <input type="password" id="password" class="form-control" />
                    </div>
                    <router-link to="/home" class="btn btn-primary btn-block">Login</router-link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/estacionamento.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.login-box {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 1;
  background-color: #fff;
  @media (min-width: 1200px) {
    width: 50rem;
    max-width: 100%;
  }
}

.card-body {
  padding: 40px;
}

.card-title {
  text-align: center;
  margin-bottom: 20px;
}

.welcome-text {
  padding: 40px;
  color: #fff;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

.form-control {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn-primary {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0069d9;
}
</style>
