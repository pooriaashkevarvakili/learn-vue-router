<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">vue Routing</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
<li class="nav-item">
  <router-link to="/" class="nav-link">home</router-link>

</li>
          <li class="nav-item">
            <router-link :to="{name:'posts'}" class="nav-link">post</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/CreatePost" class="nav-link">create Post</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavigation"
}
</script>

<style scoped>
a.router-link-active{
  background:#bbb;
}
</style>