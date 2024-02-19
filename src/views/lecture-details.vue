<template>
    <AppHeader />
    <div class="div">
        <div class="div-12">
            <div class="div-13">
                <div class="div-14">Course</div>
                <div class="div-15">/</div>
            </div>
            <div class="div-16">IT/SE</div>
        </div>
        <div class="div-17">IT/SE: Information Technology</div>
        <div class="div-18 scheduled-lec">Scheduled Lectures</div>
        <div class="div-19" v-for="lecture in lectures" :key="lecture.id">
            <div class="div-20">
                <div class="div-21">
                    <img :src="lecture.imageUrl" class="img-5" loading="lazy" />
                </div>
                <div class="div-22">
                    <div class="div-23">{{ lecture.title }}</div>
                    <div class="div-24">
                        Lecture {{ lecture.id }}<br />
                        Professor: {{ lecture.professor }}<br />
                        Time: {{ lecture.time }}<br />
                        Date: {{ lecture.date }}
                    </div>
                </div>
            </div>
            <div class="div-25">
                <a :href="lecture.link" class="div-26" target="_blank">Join</a>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
    name: 'LectureDetails',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            lectures: [
                {
                    id: 1,
                    title: 'Database Management System',
                    professor: '.......',
                    time: '8:30am',
                    date: '2023-02-23',
                    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e',
                    link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_Mzk1ZWZjZGQtNmRmYy00MGY3LTkzZmItNTA3NjUwMDk4ODYy%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22d17ac732-3418-450f-a630-2de89063fe63%22%7d',
                },
                {
                    id: 2,
                    title: 'Operating System and System administration',
                    professor: 'Mrs. Sanvitha kasthuriarachchi',
                    time: '10:30am',
                    date: '2023-02-23',
                    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e',
                    link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmNjYTZkYmItOTk3MC00NWExLWIzNjgtZjI0YjI1MTMwODdj%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22eb8117cf-b003-451d-beb6-1e0926cc38e3%22%7d',
                },
                {
                    id: 3,
                    title: 'Software Engineering',
                    professor: 'Mrs. Uthpala Samarakoon',
                    time: '1:30pm',
                    date: '2023-02-23',
                    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e',
                    link: 'href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzQxMzliNmEtZGJmZi00NzBkLWI1YjItNDlkYWEyNmQ2ZWMy%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%224a3d27ca-4f3c-4d48-94e9-5bb387fab477%22%7d',
                },
                {
                    id: 4,
                    title: 'Object Oriented Programming',
                    professor: 'Mr. Hasindu Dahanayake',
                    time: '3:30pm',
                    date: '2023-02-23',
                    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e',
                    link: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDQ2M2I2NTAtYjg1OC00YzlhLWFiN2QtOTQ5MmU1Yjk4NWM0%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22f8d4a0be-1d4f-437f-9c22-2e8af4e21e6d%22%7d',
                },
                {
                    id: 5,
                    title: 'Computer Networks',
                    professor: 'will be updated',
                    time: 'will be updated',
                    date: '2023-02-23',
                    imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e',
                    link: 'https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_YTAwOWE0MzctZjYzOS00ZGI2LTg0ZTYtNjk1ZDY2MzUzNzVj%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%252244e3cf94-19c9-4e32-96c3-14f5bf01391a%2522%252c%2522Oid%2522%253a%252231661c45-4c5f-4755-87be-d3af42991221%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=18002810-0442-491f-a826-e0862929a64c&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true', 
                }
            ],
        };
    },
};
</script>
  
<style scoped>

a {
    text-decoration: none;
    color: #121417;
}
.div {
    align-items: center;
    background-color: #fff;
    display: flex;
    width: 100%;
    padding-bottom: 50px;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div {
        max-width: 100%;
    }
}

.div-2 {
    justify-content: space-between;
    border-bottom: 1px solid #e5e8eb;
    align-self: stretch;
    display: flex;
    gap: 0px;
    padding: 13px 40px;
}

@media (max-width: 991px) {
    .div-2 {
        max-width: 100%;
        flex-wrap: wrap;
        padding: 0 20px;
    }
}

.div-3 {
    display: flex;
    gap: 16px;
    font-size: 18px;
    color: #121417;
    font-weight: 700;
    white-space: nowrap;
    letter-spacing: -0.27px;
    margin: auto 0;
}

@media (max-width: 991px) {
    .div-3 {
        white-space: initial;
    }
}

.div-4 {
    width: 16px;
    height: 16px;
    margin: auto 0;
}

.div-5 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
}

.div-6 {
    justify-content: space-between;
    display: flex;
    padding-left: 80px;
    gap: 20px;
}

@media (max-width: 991px) {
    .div-6 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-7 {
    justify-content: space-between;
    border-radius: 12px;
    background-color: #f0f2f5;
    display: flex;
    gap: 12px;
    font-size: 16px;
    color: #61788a;
    font-weight: 400;
    white-space: nowrap;
    line-height: 150%;
    padding: 8px 16px;
}

@media (max-width: 991px) {
    .div-7 {
        white-space: initial;
    }
}

.img {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 24px;
}

.div-8 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    flex-grow: 1;
}

.div-9 {
    display: flex;
    justify-content: space-between;
    gap: 8px;
}

.div-10 {
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    display: flex;
    aspect-ratio: 1;
    width: 40px;
    height: 40px;
    padding: 0 10px;
}

.img-2 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-11 {
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    display: flex;
    aspect-ratio: 1;
    width: 40px;
    height: 40px;
    padding: 0 10px;
}

.img-3 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.img-4 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 40px;
}

.div-12 {
    display: flex;
    margin-top: 20px;
    width: 100%;
    max-width: 960px;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 16px;
}

@media (max-width: 991px) {
    .div-12 {
        max-width: 100%;
        flex-wrap: wrap;
        white-space: initial;
    }
}

.div-13 {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    color: #61788a;
}

@media (max-width: 991px) {
    .div-13 {
        white-space: initial;
    }
}

.div-14 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    flex-grow: 1;
}

.div-15 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
}

.div-16 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    flex-grow: 1;
    flex-basis: auto;
}

@media (max-width: 991px) {
    .div-16 {
        max-width: 100%;
    }
}

.div-17 {
    font-feature-settings: "dlig" on;
    align-items: start;
    width: 960px;
    max-width: 100%;
    justify-content: center;
    color: #121417;
    letter-spacing: -0.8px;
    padding: 16px 60px 16px 16px;
    font: 700 32px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-17 {
        max-width: 100%;
        padding-right: 20px;
    }
}

.div-18 {
    color: #121417;
    font-feature-settings: "dlig" on;
    letter-spacing: -0.27px;
    align-self: start;
    white-space: nowrap;
    margin: 16px 0 0 176px;
    font: 700 18px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-18 {
        margin-left: 10px;
        white-space: initial;
    }
}

.div-19 {
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    margin-top: 8px;
    width: 100%;
    max-width: 960px;
    gap: 20px;
    padding: 12px 16px;
}

@media (max-width: 991px) {
    .div-19 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-20 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

@media (max-width: 991px) {
    .div-20 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-21 {
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

.img-5 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-22 {
    justify-content: center;
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div-22 {
        max-width: 100%;
    }
}

.div-23 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font: 500 16px/150% Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-23 {
        max-width: 100%;
    }
}

.div-24 {
    color: #61788a;
    font-feature-settings: "dlig" on;
    font: 400 14px/21px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-24 {
        max-width: 100%;
    }
}

.div-25 {
    justify-content: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    align-self: start;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    font-size: 14px;
    color: #121417;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 6px 27px;
}

@media (max-width: 991px) {
    .div-25 {
        white-space: initial;
        padding: 0 20px;
    }
}

.div-26 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    background-color: #f0f2f5;
    aspect-ratio: 1.43;
    justify-content: center;
}

@media (max-width: 991px) {
    .div-26 {
        white-space: initial;
    }
}

.div-27 {
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    width: 100%;
    max-width: 960px;
    gap: 20px;
    padding: 12px 16px;
}

@media (max-width: 991px) {
    .div-27 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-28 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

@media (max-width: 991px) {
    .div-28 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-29 {
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

.img-6 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-30 {
    justify-content: center;
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div-30 {
        max-width: 100%;
    }
}

.div-31 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font: 500 16px/150% Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-31 {
        max-width: 100%;
    }
}

.div-32 {
    color: #61788a;
    font-feature-settings: "dlig" on;
    font: 400 14px/21px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-32 {
        max-width: 100%;
    }
}

.div-33 {
    justify-content: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    align-self: start;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    font-size: 14px;
    color: #121417;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 6px 27px;
}

@media (max-width: 991px) {
    .div-33 {
        white-space: initial;
        padding: 0 20px;
    }
}

.div-34 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    background-color: #f0f2f5;
    aspect-ratio: 1.43;
    justify-content: center;
}

@media (max-width: 991px) {
    .div-34 {
        white-space: initial;
    }
}

.div-35 {
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    width: 100%;
    max-width: 960px;
    gap: 20px;
    padding: 12px 16px;
}

@media (max-width: 991px) {
    .div-35 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-36 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

@media (max-width: 991px) {
    .div-36 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-37 {
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

.img-7 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-38 {
    justify-content: center;
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div-38 {
        max-width: 100%;
    }
}

.div-39 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font: 500 16px/150% Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-39 {
        max-width: 100%;
    }
}

.div-40 {
    color: #61788a;
    font-feature-settings: "dlig" on;
    font: 400 14px/21px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-40 {
        max-width: 100%;
    }
}

.div-41 {
    justify-content: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    align-self: start;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    font-size: 14px;
    color: #121417;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 6px 27px;
}

@media (max-width: 991px) {
    .div-41 {
        white-space: initial;
        padding: 0 20px;
    }
}

.div-42 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    background-color: #f0f2f5;
    aspect-ratio: 1.43;
    justify-content: center;
}

@media (max-width: 991px) {
    .div-42 {
        white-space: initial;
    }
}

.div-43 {
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    width: 100%;
    max-width: 960px;
    gap: 20px;
    padding: 12px 16px;
}

@media (max-width: 991px) {
    .div-43 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-44 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

@media (max-width: 991px) {
    .div-44 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-45 {
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

.img-8 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-46 {
    justify-content: center;
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div-46 {
        max-width: 100%;
    }
}

.div-47 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font: 500 16px/150% Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-47 {
        max-width: 100%;
    }
}

.div-48 {
    color: #61788a;
    font-feature-settings: "dlig" on;
    font: 400 14px/21px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-48 {
        max-width: 100%;
    }
}

.div-49 {
    justify-content: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    align-self: start;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    font-size: 14px;
    color: #121417;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 6px 27px;
}

@media (max-width: 991px) {
    .div-49 {
        white-space: initial;
        padding: 0 20px;
    }
}

.div-50 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    background-color: #f0f2f5;
    aspect-ratio: 1.43;
    justify-content: center;
}

@media (max-width: 991px) {
    .div-50 {
        white-space: initial;
    }
}

.div-51 {
    justify-content: space-between;
    background-color: #fff;
    display: flex;
    margin-bottom: 94px;
    width: 100%;
    max-width: 960px;
    gap: 20px;
    padding: 12px 16px;
}

@media (max-width: 991px) {
    .div-51 {
        max-width: 100%;
        flex-wrap: wrap;
        margin-bottom: 40px;
    }
}

.div-52 {
    display: flex;
    justify-content: space-between;
    gap: 16px;
}

@media (max-width: 991px) {
    .div-52 {
        max-width: 100%;
        flex-wrap: wrap;
    }
}

.div-53 {
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

.img-9 {
    aspect-ratio: 1;
    object-fit: auto;
    object-position: center;
    width: 100%;
}

.div-54 {
    justify-content: center;
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
}

@media (max-width: 991px) {
    .div-54 {
        max-width: 100%;
    }
}

.div-55 {
    color: #121417;
    font-feature-settings: "dlig" on;
    font: 500 16px/150% Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-55 {
        max-width: 100%;
    }
}

.div-56 {
    color: #61788a;
    font-feature-settings: "dlig" on;
    font: 400 14px/21px Lexend, sans-serif;
}

@media (max-width: 991px) {
    .div-56 {
        max-width: 100%;
    }
}

.div-57 {
    justify-content: center;
    border-radius: 12px;
    background-color: #f0f2f5;
    align-self: start;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
    font-size: 14px;
    color: #121417;
    font-weight: 500;
    white-space: nowrap;
    line-height: 150%;
    padding: 6px 27px;
}

@media (max-width: 991px) {
    .div-57 {
        white-space: initial;
        padding: 0 20px;
    }
}

.div-58 {
    font-feature-settings: "dlig" on;
    font-family: Lexend, sans-serif;
    background-color: #f0f2f5;
    aspect-ratio: 1.43;
    justify-content: center;
}

@media (max-width: 991px) {
    .div-58 {
        white-space: initial;
    }
}</style>