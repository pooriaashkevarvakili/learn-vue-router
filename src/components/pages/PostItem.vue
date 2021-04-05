<template>
<div>
  <p>post items</p>
  <div>
    <div>id:{{id}}</div>
    <div>name:{{post.name}}</div>
    <div>Description:{{post.description}}</div>
  </div>
  <div>
    <router-link class="btn btn-warning" to="/posts">Back to Post</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "PostItem",
  data(){
    return{
      post:'',
      id:''
    }
  },
  watch:{
    $route(){

    }
  },
  created(){

    this.id=this.$route.params.id
  }
}
</script>

<style scoped>

</style>