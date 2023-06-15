<script setup>
import { RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
</script>

<template>
  <header>
    <div class="container">
      <div class="top">
        <nav>
          <div class="btn-group-vertical">
            <RouterLink to="/">
              <button class="btn btn-primary">Home</button>
            </RouterLink>
            <RouterLink to="/about">
              <button class="btn btn-primary">About</button>
            </RouterLink>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.top {
  margin: 10px;
  padding: 10px;
}

.btn-group-vertical {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
</style>
