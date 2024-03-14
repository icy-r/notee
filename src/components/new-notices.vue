<template>
  <div class="px-12">
    <h3 class="text-center font-bold underline">New notices</h3>
    <div v-if="loading">Loading notices...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="scrollable-div">
      <div
        v-for="(notice, index) in limitedNotices"
        :key="index"
        class="flex justify-center bg-white self-center mt-3 w-full max-w-screen-lg flex-col p-3 rounded-lg"
      >
        <a :href="notice.url" class="no-underline text-gray-800">
          <div class="flex justify-between gap-4 pr-20 md:pr-0">
            <div class="flex items-center justify-center bg-gray-200 rounded-lg aspect-square w-12 h-12 p-3">
              <img :src="notice.image" class="w-full h-full object-contain" loading="lazy" />
            </div>
            <div class="flex flex-col justify-center flex-grow basis-0 whitespace-nowrap leading-relaxed md:whitespace-normal">
              <div class="font-medium text-base">{{ notice.title }}</div>
              <div class="text-gray-500 text-sm">{{ notice.course }}</div>
            </div>
          </div>
        </a>
      </div>
      <div v-if="notices.length > 3">
        <a href="#" @click.prevent="navigateToMore" class="no-underline text-blue-500 font-medium text-base mt-3 block">More...</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'NewNotices',
  data() {
    return {
      notices: [],
      loading: true,
      error: null,
    };
  },
  computed: {
    limitedNotices() {
      return this.notices.slice(0, 3);
    },
  },
  methods: {
    navigateToMore() {
      this.$router.push('/more-notices');
    },
    async fetchNotices() {
      try {
        const response = await axios.get('http://localhost:3000/api/notices/y2s1');
        const { data } = response;
        this.notices = data;
      } catch (error) {
        console.error('Error fetching notices:', error.message);
        this.error = 'An error occurred while fetching notices. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchNotices();
  },
};
</script>

<style scoped>
.scrollable-div {
  max-height: 600px; /* Adjust this value as needed */
  overflow-y: auto;
}
</style>