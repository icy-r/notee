<template>
    <div>
       <h2 class="text-center bold uppercase underline text-xl">New Notice</h2>
       <div class="p-10 text-center">
         <a-form :model="noticeFormState" :label-col="labelCol" :wrapper-col="wrapperCol">
           <a-form-item label="Title">
             <a-input v-model:value="noticeFormState.title" />
           </a-form-item>
           <a-form-item label="Description">
             <a-textarea v-model:value="noticeFormState.description" />
           </a-form-item>
           <a-form-item label="Course">
             <a-input v-model:value="noticeFormState.course" />
           </a-form-item>
           <a-form-item label="Update Time">
             <a-date-picker v-model:value="noticeFormState.updateTime" />
           </a-form-item>
           <a-form-item label="Expiry Date">
             <a-date-picker v-model:value="noticeFormState.expiryDate" />
           </a-form-item>
           <a-form-item label="Priority">
             <a-select v-model:value="noticeFormState.priority">
               <a-select-option value="high">High</a-select-option>
               <a-select-option value="medium">Medium</a-select-option>
               <a-select-option value="low">Low</a-select-option>
             </a-select>
           </a-form-item>
           <a-form-item label="Status">
             <a-switch v-model:checked="noticeFormState.status" />
           </a-form-item>
           <a-form-item label="URL">
             <a-input v-model:value="noticeFormState.url" />
           </a-form-item>
           <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
             <a-button type="primary" @click="submitNotice">Submit Notice</a-button>
             <a-button style="margin-left: 10px">Cancel</a-button>
           </a-form-item>
         </a-form>
       </div>
    </div>
   </template>
   
   <script setup>
   import { reactive, toRaw } from 'vue';
   import { useToast } from 'vue-toast-notification';
   
   // Initialize noticeFormState with the notice object
   const noticeFormState = reactive({
    title: '',
    description: '',
    course: '',
    updateTime: null,
    expiryDate: null,
    priority: 'medium',
    status: true,
    url: ''
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
   
   const submitNotice = () => {
    const requestData = {
       ...toRaw(noticeFormState),
       updateTime: noticeFormState.updateTime.format('YYYY-MM-DD'),
       expiryDate: noticeFormState.expiryDate.format('YYYY-MM-DD'),
    };
   
    fetch('http://localhost:3000/api/notices/create', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(requestData)
    })
       .then(response => {
         if (response.status === 201) {
           return response.json().then(data => {
             console.log('Notice created successfully:', data);
             toast.success('Successfully created!');
           });
         } else if (!response.ok) {
           return response.text().then(text => {
             throw new Error(`Network response was not ok: ${response.status} ${text}`);
           });
         } else {
           throw new Error(`Unexpected status code: ${response.status}`);
         }
       })
       .catch(error => {
         console.error('There has been a problem with your fetch operation:', error);
         toast.error('An error occurred.');
       });
   };
   </script>
   