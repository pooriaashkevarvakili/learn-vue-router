<template>
<div>
  <h3>create Post</h3>
  <form @submit.prevent="onCreatePost()">
     <div class="form-group">
       <label>Title</label>
       <input type="text" class="form-control" v-model="name">
     </div>
    <div class="form-group">
      <label>description</label>
      <textarea class="form-control" v-model="body"></textarea>
    </div>
    <div>
      <button type="submit" class="btn btn-primary">Create Post</button>
    </div>
  </form>
</div>

</template>

<script>
import Axios from 'axios';
export default {
  name: "CreatePost",
  data(){
    return{
      name:'',
      body:''
    }
  },
  methods:{
    onCreatePost(){
      Axios.post('https://jsonplaceholder.typicode.com/posts/1/comments',{
        name:this.name,
        body:this.body
      }).then(res=>{
        console.log(res)
        this.$router.push('/Posts')
      })
    }
  }
}
</script>

<style scoped>

</style>