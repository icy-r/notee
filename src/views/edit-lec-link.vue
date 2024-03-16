<template>
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
</template>

<script>
// eslint-disable-next-line
import { reactive, toRaw, ref, onMounted } from 'vue';
import { useToast } from 'vue-toast-notification';
import axios from 'axios';

export default {
    name: 'EditLecLink',
    setup() {
        const lectureFormState = reactive({
            id: '',
            title: '',
            professor: '',
            time: '',
            imageUrl: '',
            link: ''
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

        const fetchLecture = async (id) => {
            try {
                const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/api/get-edit-leclinks?${id}`);
                const { data } = response;
                lectureFormState.id = data.id;
                lectureFormState.title = data.title;
                lectureFormState.professor = data.professor;
                lectureFormState.time = data.time;
                lectureFormState.imageUrl = data.imageUrl;
                lectureFormState.link = data.link;
            } catch (error) {
                console.error('Error fetching lecture:', error.message);
                toast.error('An error occurred while fetching lecture. Please try again later.');
            }
        };

        const updateLecture = async () => {
            const requestData = toRaw(lectureFormState);

            try {
                const response = await axios.put(`${process.env.VUE_APP_API_BASE_URL}/api/edit-leclink/${requestData.id}`, requestData);

                if (response.status === 200) {
                    toast.success('Successfully updated!');
                } else {
                    throw new Error(`Unexpected status code: ${response.status}`);
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
                toast.error('An error occurred.');
            }
        };

        onMounted(() => {
            const id = this.$route.params.id;
            fetchLecture(id);
        });

        return {
            lectureFormState,
            labelCol,
            wrapperCol,
            updateLecture
        };
    }
}
</script>