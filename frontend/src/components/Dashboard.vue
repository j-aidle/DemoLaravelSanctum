<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import apiClient from "../axios.js";
import { clearAuthToken } from '../auth';
export default {
  methods: {
    async logout() {
      try {
        await apiClient.post('/api/logout');
        localStorage.removeItem("token");
        clearAuthToken();
        this.$router.push("/");
      }  catch (err) {
        alert('Logout failed.');
      }
    },
  },
}
</script>