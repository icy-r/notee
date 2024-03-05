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
            <div v-for="lecture in lectures" :key="lecture.id"
                class="flex items-start justify-between w-full max-w-5xl gap-4 p-4">
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
