<template>
<div >
  <h3>Post Details</h3>
  <table class="table">
    <thread>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>description</th>
      </tr>
    </thread>
    <tbody>
    <tr v-for="post in postDetails" :key="post.id">
      <td>{{post.id}}</td>
      <td>{{post.email}}</td>
      <td>{{post.name}}</td>
      <td>{{post.body}}</td>
      <td>
        <router-link :to="`/posts/${post.id}`" class="btn btn-primary">show Details</router-link>
      </td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "Posts",
  data(){
    return{
      postDetails:[]
    }
  },
  mounted() {
    Axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`).then((res)=>{
      this.formatPost(res.data)
    })
  },
  methods:{
    formatPost(postData){
for(let key in postData){
  this.postDetails.push({...postData[key],id:key})
}
    }
  }
}
</script>

<style scoped>

</style>