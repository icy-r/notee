<template>
    <AppHeader />
    <div class="container123 flex flex-col items-center grow">
      <NewNotices class="w-full max-w-screen-lg" />
      <lecNotes class="w-full max-w-screen-lg" />
    </div>
    <!-- <AppFooter /> -->
  </template>
  
  <script>
  import logo from '@/assets/logo.jpg';
  import AppHeader from '@/components/Header.vue';
  import NewNotices from '@/components/new-notices.vue';
  import lecNotes from '@/components/lec-notes.vue';
  // import AppFooter from '@/components/Footer.vue';
  
  export default {
    name: 'HomePage',
    components: {
      AppHeader,
      NewNotices,
      lecNotes,
      // AppFooter,
    },
    data() {
      return {
        logo,
        showNotice: true,
      };
    },
  };
  </script>