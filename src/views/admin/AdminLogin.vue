<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="w-full max-w-md">
            <div class="flex flex-col items-center justify-center gap-4 p-6 bg-white rounded-lg shadow-md">
                <h1 class="text-3xl font-bold text-blue-600">Admin Login</h1>
                <form class="flex flex-col gap-4" @submit.prevent="login">
                    <div class="flex flex-col gap-2">
                        <label for="email" class="text-gray-600">Email</label>
                        <input type="text" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="password" class="text-gray-600">Password</label>
                        <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <button type="submit" class="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-lg">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'AdminLogin',
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post(`${process.env.VUE_APP_API_BASE_URL}/api/admin/create-token`, {
                    email: this.email,
                    password: this.password,
                });
                const { data } = response;
                console.log('Admin login response:', data);
                if(data.token)
                {
                    localStorage.setItem('token', data.token);
                    this.$router.push('/admin-dashboard');
                }
                else
                {
                    console.error('invalid response from server');  
                }

                // this.$router.push('api/admin');
            } catch (error) {
                console.error('Error logging in:', error.message);
            }
        },
    },
};
</script>