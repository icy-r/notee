<template>
    <div>
        <AppHeader />

        <main>
            <div class="notices animate">
                <router-link to="/timetable">
                    <h3>
                        Timetable is updated!
                    </h3>
                </router-link>
            </div>
        </main>

        <AppFooter />
    </div>
</template>
  
<script>
import logo from '@/assets/logo.jpg';
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
    name: 'HomePage',
    components: {
        AppHeader,
        AppFooter,
    },
    data() {
        return {
            logo,
        };
    },
};
</script>
  
<style scoped>

.notices {
    background-color: #c1d3c2;
    color: rgb(5, 5, 5);
    text-align: center;
    padding: 5px;
    font-size: 30px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 10px;
    margin: 10px;
}

.animate {
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}



</style>