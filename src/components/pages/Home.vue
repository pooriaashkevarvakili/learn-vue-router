<template>
<div>
  <div>
    <button @click.prevent="onPostClick()">click to Post Page</button>
  </div>
  Home Page
</div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    onPostClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>