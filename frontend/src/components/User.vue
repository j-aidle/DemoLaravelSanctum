<template>
  <div>
    <h2>User Information</h2>
    <div v-if="user">
      <p>Email: {{ user.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from '../axios';
export default {
  data() {
    return {
      user: null
    };
  },
  async mounted() {
    try {
      const response = await axios.get('/user');
      this.user = response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>