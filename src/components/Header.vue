<template>
  <header class="flex justify-between p-2 border-b border-gray-300">
    <section class="flex justify-between w-full items-center"> <!-- Add items-center here -->
      <a href="/" class="flex items-center gap-4 px-2">
        <img loading="lazy" src="../assets/logo.png" alt="UniConnect logo" class="w-12 h-12 object-cover" />
        <h1 class="text-lg text-gray-900 font-bold px-2">Notee</h1>
      </a>
      <nav class="flex justify-end items-center"> <!-- Add items-center here -->
        <ul class="flex gap-5 py-auto list-none">
          <li class="font-bold" v-for="link in navLinks" :key="link.name">
            <button @click="navigate(link.href)" class="bg-none border-none text-gray-900 text-sm cursor-pointer">{{ link.name }}</button>
          </li>
        </ul>
      </nav>
    </section>
    <form class="bg-gray-200 rounded-full px-5 m-2 w-8 hidden" @submit.prevent="handleSearch">
      <label for="searchInput" class="sr-only">Search</label>
      <input class="flex-grow rounded-full border-none bg-transparent text-gray-600 text-base" type="search" id="searchInput" placeholder="Search" aria-label="Search" v-model="searchQuery" />
      <button class="bg-none border-none p-0 flex items-center" type="submit">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b85695d4774e21b2c0d2a766bca0f7d9b4333f2ab8e27a807d1061aa941f60?apiKey=82f83280471648fbb704a7686cae1d7e" alt="Search" class="w-6 h-6" />
      </button>
    </form>
  </header>
</template>

<!-- Your script and style remain the same -->
<script>
  import Swal from 'sweetalert2';
  
  export default {
    name: "AppHeader",
    data() {
      return {
        navLinks: [
          { name: "Home", href: "/" },
          { name: "Lecture", href: "/lecture-details" },
          { name: "TimeTable", href: "timetable" },
          // { name: "Groups", href: "#" },
          // { name: "Explore", href: "#" },
        ],
        searchQuery: "",
      };
    },
    mounted() {
      const search = document.querySelectorAll(".search-button");
      search.forEach((button) => {
        button.addEventListener("click", () => {
          Swal.fire({
            title: "Search",
            text: `Searching function is in development.`,
            icon: "info",
            confirmButtonText: "OK",
          });
        });
      });
    },
    methods: {
      handleSearch() {
        alert(`Searching for: ${this.searchQuery}`);
      },
      navigate(href) {
        window.location.href = href;
      },
      handleProfileClick() {
        alert("Profile Clicked");
      },
    },
  };
  </script>
  

<style scoped>
/* Remove all the styles here as they are replaced by Tailwind classes */
</style>