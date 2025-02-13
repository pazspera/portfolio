<template>
    <swiper 
        :modules="modules"
        :slides-per-view="1"
        navigation
        pagination
    >
        <swiper-style v-for="(img, index in images)" :key="index">
            <img :src="img" class="slide-img" />
        </swiper-style> 
   </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default {
    components: {Swiper, SwiperSlide},
    props: {
        images: {
            type: Array,
            required: true,
        }
    },
    data() {

    }
}
</script>

<style scoped>
.slide-img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>