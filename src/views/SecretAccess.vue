<template>
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
</template>

<script setup>
import { reactive, toRaw } from 'vue';
import { useToast } from 'vue-toast-notification';

// Initialize lectureFormState with the lecture object
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

const updateLecture = () => {
    const date = new Date();
    const requestData = {
        ...toRaw(lectureFormState),
        date: date.toLocaleDateString(),
    };

    fetch('http://45.76.155.187:7002/api/lecture-details/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => {
            if (response.status === 201) {
                return response.json().then(data => {
                    console.log('Lecture details created successfully:', data);
                    // Show a success toast
                    toast.success('Successfully created!');
                });
            } else if (!response.ok) {
                // Handle other non-ok status codes
                return response.text().then(text => {
                    throw new Error(`Network response was not ok: ${response.status} ${text}`);
                });
            } else {
                // Handle unexpected status codes
                throw new Error(`Unexpected status code: ${response.status}`);
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch operation
            console.error('There has been a problem with your fetch operation:', error);
            toast.error('An error occurred.');
        });
};
</script>
