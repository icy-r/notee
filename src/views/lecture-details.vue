<template>
  <AppHeader />
  <div class="flex flex-col items-center bg-white w-full pb-16">
    <div class="flex flex-col items-center w-full max-w-5xl gap-8">
      <div class="flex items-center justify-between border-b border-gray-300 w-full py-4 px-8">
        <div class="flex items-center gap-2 text-gray-700">
          <div class="font-semibold">Course</div>
          <div>/</div>
        </div>
        <div class="flex-grow text-gray-900 font-semibold">IT/SE</div>
      </div>
      <div class="text-gray-900 font-bold text-2xl self-start mt-4">IT/SE: Information Technology</div>
      <div class="text-gray-900 font-bold text-lg self-start mt-2 scheduled-lec">Scheduled Lectures</div>
      <div v-for="lecture in lectures" :key="lecture.id" class="flex items-start justify-between w-full max-w-5xl gap-4 p-4">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12">
            <img :src="lecture.imageUrl" class="w-full h-full object-cover rounded" loading="lazy" />
          </div>
          <div class="flex flex-col">
            <div class="text-xl font-semibold">{{ lecture.title }}</div>
            <div class="text-gray-700">
              Lecture {{ lecture.id }}<br />
              Professor: {{ lecture.professor }}<br />
              Time: {{ lecture.time }}<br />
              Date: {{ lecture.date }}
            </div>
          </div>
        </div>
        <div class="flex items-center">
          <a :href="lecture.link" class="py-2 px-4 bg-gray-200 rounded" target="_blank">Join</a>
        </div>
      </div>
    </div>
  </div>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import axios from 'axios';

const date = new Date();

export default {
  name: 'LectureDetails',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      lectures: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`https://nodejs-serverless-function-express-seven-dusky.vercel.app/api/manage-leclinks`);

      const { data } = response;
      this.lectures = data.map(lecture => ({
        id: lecture.id,
        title: lecture.title,
        professor: lecture.professor,
        time: lecture.time,
        date: date.toLocaleDateString(),
        imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e",
        link: lecture.link,
      }));
      // console.table(this.lectures);
    } catch (error) {
      console.error('Error fetching lectures:', error.message);
      this.error = 'An error occurred while fetching lectures. Please try again later.';
    } finally {
      this.loading = false;
    }
  },
};
</script>