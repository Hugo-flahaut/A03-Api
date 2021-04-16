<template>
    <form @submit.prevent="handleSubmit" class="container  col-lg-6 col-md-6 col-sm-9 mx-auto">
        <h3>Sign up</h3>

        <div class="form-group">
            <label>First name</label>
            <input class="form-control" placeholder="First Name" v-model="firstName" >
        </div>

        <div class="form-group">
            <label>Last name</label>
            <input class="form-control" placeholder="Last Name"  v-model="lastName">
        </div>
            
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" placeholder="Email"  v-model="email">
        </div>

        
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Password"  v-model="password">
        </div>

        <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" placeholder="Confirm Password"  v-model="passwordConfirm">
        </div>

        <button class="btn btn-primary m-2">
            Register
        </button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Register',
    data (){
        return {
            firstName: '', 
            lastName: '',
            email: '',
            password: '', 
            passwordConfirm: ''
        }
    },
    methods: {

        async handleSubmit(){  
        
            await axios.post('users', {
                firstName: this.firstName,
                lastName: this.lastName, 
                email: this.email, 
                password: this.password, 
                passwordConfirm: this.passwordConfirm
            });

            this.$router.push('/login');
        }
    }
}

</script>