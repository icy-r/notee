<template>
  <div class="flex flex-col min-h-screen">
     <nav class="bg-gray-800 py-4">
       <div class="container mx-auto flex justify-between items-center px-4">
         <div class="text-white font-bold text-xl">Admin Dashboard</div>
         <ul class="flex space-x-4 text-white">
           <li class="bg-slate-400 p-1 rounded-md"><router-link to="/admin-dashboard" class="hover:text-gray-300">Dashboard</router-link></li>
           <li class="bg-slate-400 p-1 rounded-md"><router-link to="/managenotice" class="hover:text-gray-300">Notices</router-link></li>
           <li class="bg-slate-400 p-1 rounded-md"><router-link to="/managelec" class="hover:text-gray-300">Lecture Links</router-link></li>
           <li class="bg-slate-400 p-1 rounded-md"><router-link to="/soon" class="hover:text-gray-300">Soon</router-link></li>
           <li class="bg-slate-400 p-1 rounded-md"><a href="#" @click.prevent="logout" class="hover:text-gray-300 font-bold">Logout</a></li>
         </ul>
       </div>
     </nav>
     <div class="flex-grow container mx-auto px-4 py-8">
       <div class="bg-white rounded-lg p-6 shadow-md mb-6">
         <h2 class="text-2xl font-bold mb-4">Welcome, Admin</h2>
         <p>Here's an overview of your website's analytics.</p>
       </div>
       <!-- Example of a dynamic component that can be swapped based on the route -->
       <!-- <router-view></router-view>
       -->

       <div @click="navigate('/managelec')" class="bg-white rounded-lg p-6 shadow-md mb-6">
         <h2 class="text-2xl font-bold mb-4">Lec-Links</h2>
         <p>manage lecture links.</p>
       </div>
       <div @click="navigate('/managenotice')" class="bg-white rounded-lg p-6 shadow-md mb-6">
         <h2 class="text-2xl font-bold mb-4">Notices</h2>
         <p>manage Notices.</p>
       </div>
       

     </div>
  </div>
 </template>
 
 <script>
//  import { useRouter } from 'vue-router';
 export default {
  name: 'AdminDashboard',
  methods: {
     logout() {
       // Remove the admin token from local storage or Vuex store
       localStorage.removeItem('adminToken');
       // Redirect to the login page
       this.$router.push('/admin-login');
     },
     navigate(route){
      this.$router.push(route);
     }
  },
 };
 </script>
 