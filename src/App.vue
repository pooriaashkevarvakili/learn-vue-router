<template>
<TheNavigation/>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>

</template>
<script>
import TheNavigation from "./components/pages/TheNavigation"
export default {
  components:{
    TheNavigation
  }
}
</script>
<style>

</style>
