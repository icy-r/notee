<template>
    <header class="site-header">
      <section class="brand-search-container">
        <div class="logo-name-container">
          <img loading="lazy" src="../assets/logo.png" alt="UniConnect logo" class="brand-logo" />
          <h1 class="brand-name">Notee</h1>
        </div>
        <form class="search-form" @submit.prevent="handleSearch">
          <label for="searchInput" class="visually-hidden">Search</label>
          <input class="search-input" type="search" id="searchInput" placeholder="Search" aria-label="Search" v-model="searchQuery" />
          <button class="search-button" type="submit">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4b85695d4774e21b2c0d2a766bca0f7d9b4333f2ab8e27a807d1061aa941f60?apiKey=82f83280471648fbb704a7686cae1d7e" alt="Search" class="search-icon" />
          </button>
        </form>
      </section>
      <nav class="site-navigation">
        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.name">
            <button @click="navigate(link.href)" class="nav-link">{{ link.name }}</button>
          </li>
        </ul>
        <!-- <div class="action-buttons">
          <button class="create-button" @click="handleCreate">Create</button>
          <button class="profile-button" @click="handleProfileClick">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df7ca25d0c4e23cfedbbb0f3999b90016f9d8b557d020f519abbf0feb3178ec1?apiKey=82f83280471648fbb704a7686cae1d7e" alt="Profile" class="profile-icon" />
          </button>
        </div> -->
      </nav>
    </header>
  </template>
  
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
        // alert(`Searching for: ${this.searchQuery}`);
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
  .site-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #e5e8eb;
  }
  
  @media (max-width: 767px) {
    .site-header {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .brand-search-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
  .logo-name-container {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .brand-logo {
    width: 3rem;
    aspect-ratio: 1;
    object-fit: cover;
  }
  
  .brand-name {
    font-size: 18px;
    color: #121417;
    font-weight: 700;
    margin: auto;
    font-family: Lexend, sans-serif;
  }
  
  .search-form {
    display: flex;
    background-color: #f0f2f5;
    border-radius: 12px;
    padding: 2px 10px;
    margin: 10px 10px;
    width: 100%;
  }
  
  .search-input {
    flex-grow: 1;
    border: none;
    background: transparent;
    color: #61788a;
    font-size: 16px;
  }
  
  .search-button {
    background: none;
    border: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  .search-icon {
    width: 24px;
    aspect-ratio: 1;
  }
  
  .site-navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: flex-end;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
    padding: auto;
    list-style: none;
  }
  
  .nav-link {
    background: none;
    border: none;
    color: #121417;
    font-size: 14px;
    cursor: pointer;
  }
  
  .action-buttons {
    display: flex;
    gap: 10px;
    padding: auto;
    margin: auto;
  }
  
  .create-button,
  .profile-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 0;
    padding: 10px;
    background-color: #1c91f2;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
  }
  
  .profile-icon {
    width: 40px;
    aspect-ratio: 1;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
  </style>
  