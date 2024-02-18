<template>
    <h3>
        New notices
    </h3>
    <div class="div" v-for="(notice, index) in limitedNotices" :key="index">
        <a :href="notice.url">
            <div class="div-2">
                <div class="div-3">
                    <img
                        loading="lazy"
                        :src="notice.image"
                        class="img"
                    />
                </div>
                <div class="div-4">
                    <div class="div-5">{{ notice.title }}</div>
                    <div class="div-6">{{ notice.course }}</div>
                </div>
            </div>
        </a>
    </div>
    <div v-if="notices.length > 2">
        <a class="more" href="#" @click.prevent="navigateToMore">More...</a>
    </div>
</template>

<script>
export default {
    name: 'NewNotices',
    data() {
        return {
            notices: [
                {
                    title: 'Timetable has been updated!',
                    course: 'For Year 2 students',
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/db7bc06b091ffccae07d2fe6753e3233f5c766ccafd84e3265f8c55f44882f1a?apiKey=82f83280471648fbb704a7686cae1d7e',
                    url: '/timetable',
                },
                {
                    title: 'Lecture Details are updated!',
                    course: 'For all students',
                    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df7ca25d0c4e23cfedbbb0f3999b90016f9d8b557d020f519abbf0feb3178ec1?apiKey=82f83280471648fbb704a7686cae1d7e',
                    url: '/lecture-details',
                },
                // {
                //     title: 'Exam schedule released!',
                //     course: 'For all students',
                //     image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/df7ca25d0c4e23cfedbbb0f3999b90016f9d8b557d020f519abbf0feb3178ec1?apiKey=82f83280471648fbb704a7686cae1d7e',
                //     url: '/exam-schedule',
                // },
            ],
        };
    },
    computed: {
        limitedNotices() {
            return this.notices.slice(0, 2);
        },
    },
    methods: {
        navigateToMore() {
            this.$router.push('/more-notices');
        },
    },
};
</script>

<style scoped>
    .div {
  justify-content: center;
  background-color: #fff;
  align-self: center;
  display: flex;
  margin-top: 12px;
  width: 100%;
  /* max-width: 960px; */
  flex-direction: column;
  padding: 12px 16px;
  border-radius: 8px;
  /* flex-grow: 1; */
}
a {
    text-decoration: none;
    color: #121417;
}

@media (max-width: 991px) {
  .div {
    max-width: 100%;
  }
}
.div-2 {
  display: flex;
  padding-right: 80px;
  justify-content: space-between;
  gap: 16px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}

.more {
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    margin-top: 12px;
    display: block;
    }
.div-3 {
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f0f2f5;
  display: flex;
  aspect-ratio: 1;
  width: 48px;
  height: 48px;
  padding: 0 12px;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
.div-4 {
  justify-content: center;
  align-self: start;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  white-space: nowrap;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-4 {
    white-space: initial;
  }
}
.div-5 {
  color: #121417;
  font-feature-settings: "dlig" on;
  font: 500 16px Lexend, sans-serif;
  text-decoration: none;
}
@media (max-width: 991px) {
  .div-5 {
    white-space: initial;
  }
}
.div-5 a{
    text-decoration: none;
    color: #121417;

}
.div-6 {
  color: #61788a;
  font-feature-settings: "dlig" on;
  font: 400 14px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    white-space: initial;
  }
}
.div-6 a{
    text-decoration: none;
    color: #61788a;
}
    .div {
  justify-content: center;
  background-color: #fff;
  align-self: center;
  display: flex;
  margin-top: 12px;
  width: 100%;
  max-width: 960px;
  flex-direction: column;
  padding: 12px 16px;
  border-radius: 8px;
}
@media (max-width: 991px) {
  .div {
    max-width: 100%;
  }
}
.div-2 {
  display: flex;
  padding-right: 80px;
  justify-content: space-between;
  gap: 16px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.div-3 {
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #f0f2f5;
  display: flex;
  aspect-ratio: 1;
  width: 48px;
  height: 48px;
  padding: 0 12px;
}
.img {
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100%;
}
.div-4 {
  justify-content: center;
  align-self: start;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  white-space: nowrap;
  line-height: 150%;
}
@media (max-width: 991px) {
  .div-4 {
    white-space: initial;
  }
}
.div-5 {
  color: #121417;
  font-feature-settings: "dlig" on;
  font: 500 16px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-5 {
    white-space: initial;
  }
}
.div-6 {
  color: #61788a;
  font-feature-settings: "dlig" on;
  font: 400 14px Lexend, sans-serif;
}
@media (max-width: 991px) {
  .div-6 {
    white-space: initial;
  }
}
.more {
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    margin-top: 12px;
    display: block;
    }
</style>