<template>
    <form @submit.prevent="handleSubmit" class="container col-lg-6 col-md-6 col-sm-9 mx-auto">

        <h3>Login </h3>

        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Email" v-model="email">
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
        </div>

        <button class="btn btn-primary m-2">Login</button>
    </form>


</template>

<script>
import axios from 'axios'

export default {
    name: 'Login', 
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        async handleSubmit() {
            const response = await axios.post('login', {
                email: this.email, 
                password: this.password
            });

            console.log(response);
            localStorage.setItem('token', response.data.token);
            this.$router.push('/')
        }
    }
}
</script>