<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label>Email:</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
import apiClient from '../axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      deviceName: 'web',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await apiClient.post('/api/login', {
          email: this.email,
          password: this.password,
          device_name: this.deviceName,
        });
        localStorage.setItem('token', response.data.token);
        this.error = null;
        alert('Login successful!');
        this.$router.push('/dashboard');

      } catch (err) {
        this.error = 'Login failed. Please check your credentials.';
      }
    },
  },
};
</script>