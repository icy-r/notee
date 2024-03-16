<template>
    <div>
        <h2 class="text-center bold uppercase underline text-xl">Lecture Details</h2>
        <div v-if="loading">Loading lectures...</div>
        <div v-for="lecture in lectures" :key="lecture.id"
            class="flex items-start justify-between w-full max-w-5xl gap-4 p-4">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12">
                    <img :src="lecture.imageUrl" class="w-full h-full object-cover rounded" loading="lazy" />
                </div>
                <div class="flex flex-col">
                    <div class="text-xl font-semibold">{{ lecture.title }}</div>
                    <div class="text-gray-700">
                        Lecture {{ lecture._id }}<br />
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
        <div class="p-10 text-center">
            <div>
                <h2 class="text-center bold uppercase underline text-xl">Lecture Details</h2>
                <div class="p-10 text-center">
                    <a-form :model="lectureFormState" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <a-form-item label="Lecture Title">
                            <a-input v-model:value="lectureFormState.title" />
                        </a-form-item>
                        <a-form-item label="Professor">
                            <a-input v-model:value="lectureFormState.professor" />
                        </a-form-item>
                        <a-form-item label="Time">
                            <a-input v-model:value="lectureFormState.time" />
                        </a-form-item>
                        <a-form-item label="Image URL">
                            <a-input v-model:value="lectureFormState.imageUrl" />
                        </a-form-item>
                        <a-form-item label="Lecture Link">
                            <a-input v-model:value="lectureFormState.link" />
                        </a-form-item>
                        <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                            <a-button type="primary" @click="updateLecture">Update Lecture Link</a-button>
                            <a-button style="margin-left: 10px">Cancel</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRaw, ref } from 'vue';
import { useToast } from 'vue-toast-notification';
import axios from 'axios';

export default {
    name: 'alllecDetails',
    setup() {
        const lectureFormState = reactive({
            id: '1',
            title: 'Introduction to Computer Science',
            professor: 'John Doe',
            time: '10:00 AM',
            imageUrl: 'https://example.com/lecture-image.jpg',
            link: 'https://example.com/lecture-video'
        });

        const labelCol = {
            style: {
                width: '150px',
            },
        };

        const wrapperCol = {
            span: 14,
        };

        const toast = useToast();

        const lectures = ref([]);
        const loading = ref(true);

        const fetchLectures = async () => {
            try {
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/manage-leclinks`);
                const { data } = response;
                lectures.value = data.map(lecture => ({
                    id: lecture.id,
                    title: lecture.title,
                    professor: lecture.professor,
                    time: lecture.time,
                    date: new Date().toLocaleDateString(),
                    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/0256debb5de7c2fef6964f587a8f67a13485ecfc7e246d0612a25695f746b8b3?apiKey=82f83280471648fbb704a7686cae1d7e",
                    link: lecture.link,
                }));
            } catch (error) {
                console.error('Error fetching lectures:', error.message);
                toast.error('An error occurred while fetching lectures. Please try again later.');
            } finally {
                loading.value = false;
            }
        };

        const updateLecture = async () => {
            const date = new Date();
            const requestData = {
                ...toRaw(lectureFormState),
                date: date.toLocaleDateString(),
            };

            try {
                const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/api/create-leclink`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestData)
                });

                if (response.status === 201) {
                    await response.json();
                    toast.success('Successfully created!');
                    await fetchLectures(); // Fetch lectures again to update the list
                } else {
                    throw new Error(`Unexpected status code: ${response.status}`);
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
                toast.error('An error occurred.');
            }
        };

        fetchLectures(); // Fetch lectures when the component is created

        return {
            lectureFormState,
            labelCol,
            wrapperCol,
            updateLecture,
            lectures,
            loading
        };
    }
}
</script>