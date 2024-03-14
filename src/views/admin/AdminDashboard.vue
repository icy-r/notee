<template>
    <div class="flex flex-col min-h-screen">
      <nav class="bg-gray-800 py-4">
        <div class="container mx-auto flex justify-between items-center px-4">
          <div class="text-white font-bold text-xl">Admin Dashboard</div>
          <ul class="flex space-x-4 text-white">
            <li><a href="#" class="hover:text-gray-300">Dashboard</a></li>
            <li><a href="#" class="hover:text-gray-300">Users</a></li>
            <li><a href="#" class="hover:text-gray-300">Products</a></li>
            <li><a href="#" class="hover:text-gray-300">Orders</a></li>
            <li>
              <a href="#" @click.prevent="logout" class="hover:text-gray-300">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="flex-grow container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg p-6 shadow-md mb-6">
          <h2 class="text-2xl font-bold mb-4">Welcome, Admin</h2>
          <p>Here's an overview of your website's analytics.</p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md mb-6">
          <h3 class="text-xl font-bold mb-4">Recent Orders</h3>
          <table class="w-full">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 text-left">Order ID</th>
                <th class="py-2 px-4 text-left">Customer</th>
                <th class="py-2 px-4 text-left">Total</th>
                <th class="py-2 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="order in recentOrders" :key="order.id" class="border-b">
                <td class="py-2 px-4">{{ order.id }}</td>
                <td class="py-2 px-4">{{ order.customer }}</td>
                <td class="py-2 px-4">{{ order.total }}</td>
                <td class="py-2 px-4">{{ order.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-bold mb-4">Website Analytics</h3>
          <p class="mb-2">Visitors today: {{ visitorsToday }}</p>
          <p class="mb-2">Total visitors: {{ totalVisitors }}</p>
          <p class="mb-4">Popular pages:</p>
          <ul>
            <li v-for="page in popularPages" :key="page.url" class="ml-4">
              {{ page.url }} ({{ page.views }} views)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminDashboard',
    data() {
      return {
        recentOrders: [
          { id: 1234, customer: 'John Doe', total: '$99.99', status: 'Shipped' },
          { id: 5678, customer: 'Jane Smith', total: '$49.99', status: 'Pending' },
          { id: 9012, customer: 'Bob Johnson', total: '$24.99', status: 'Delivered' },
        ],
        visitorsToday: 1245,
        totalVisitors: 25678,
        popularPages: [
          { url: '/products', views: 2345 },
          { url: '/about', views: 1234 },
          { url: '/contact', views: 987 },
        ],
      };
    },
    methods: {
      logout() {
        // Remove the admin token from local storage or Vuex store
        localStorage.removeItem('adminToken');
        // Redirect to the login page
        this.$router.push('/admin-login');
      },
    },
  };
  </script>